import React from 'react'

import ButtonBar from '../components/ButtonBar'
import LinkButton from '../components/LinkButton'
import Main, { MainChild } from '../components/Main'
import Prose from '../components/Prose'
import Screen from '../components/Screen'

const HelpPage = () => {
  return (
    <Screen>
      <Main>
        <MainChild>
          <Prose>
            <h1>Help</h1>
            <p>Help content will be available here.</p>
          </Prose>
        </MainChild>
      </Main>
      <ButtonBar secondary>
        <div />
        <LinkButton goBack>Back</LinkButton>
      </ButtonBar>
    </Screen>
  )
}

export default HelpPage
