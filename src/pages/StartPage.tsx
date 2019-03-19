import React, { useContext } from 'react'
import styled from 'styled-components'

import BallotContext from '../contexts/ballotContext'

import LinkButton from '../components/LinkButton'
import Main, { MainChild } from '../components/Main'
import Prose from '../components/Prose'
import Screen from '../components/Screen'

const Seal = styled.div`
  max-width: 320px;
  margin: auto;
`

const StartPage = () => {
  const { election } = useContext(BallotContext)
  const { title, state, county, date, seal } = election!
  return (
    <Screen>
      <Main>
        <MainChild center>
          <Seal
            dangerouslySetInnerHTML={{ __html: seal }}
          />
          <Prose textCenter>
            <h1>
              {title}
              <span className="visually-hidden">.</span>
            </h1>
            <p>
              {date}
              <span className="visually-hidden">.</span>
              <br />
              {county}, {state}
              <span className="visually-hidden">.</span>
            </p>
            <p>
              <LinkButton primary to={`/contests`}>
                Get Started
              </LinkButton>
            </p>
          </Prose>
        </MainChild>
      </Main>
    </Screen>
  )
}

export default StartPage
