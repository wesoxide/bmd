import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import styled from 'styled-components'

const StyledScreen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

interface Props {
  focusOnMount?: boolean
}

interface ComponentProps extends Props, RouteComponentProps<{}> {}

class Screen extends React.Component<ComponentProps> {
  public static defaultProps: Props = {
    focusOnMount: true,
  }
  public screen = React.createRef<HTMLDivElement>()
  public componentDidMount() {
    if (this.props.focusOnMount) {
      this.screen.current!.focus()
      console.log('focusing on ', this.screen.current)
    }
    console.log(`cdm() curr: ${this.props.location.pathname}`)
    this.routeChanged()
  }
  public componentDidUpdate(prevProps: ComponentProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      console.log(
        `cdu() new prev: ${prevProps.location.pathname} curr: ${
          this.props.location.pathname
        }`
      )
      this.routeChanged()
    } else {
      console.log(
        `cdu() sam prev: ${prevProps.location.pathname} curr: ${
          this.props.location.pathname
        }`
      )
    }
  }
  public routeChanged() {
    const { location } = this.props
    console.log(`routeChanged() to "${location.pathname}"`, location)
  }

  public render() {
    return (
      <StyledScreen ref={this.screen} tabIndex={-1}>
        {this.props.children}
      </StyledScreen>
    )
  }
}

export default withRouter(Screen)
