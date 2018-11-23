import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import {
  HomePage,
  Header,
  Login,
  PlacePage
} from '../'

const App = () =>
  <Wrapper>
    <Header />
    <Content>
      <Login />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/about-us' component={HomePage} />
        <Route exact path='/places' component={HomePage} />
        <Route exact path='/events' component={HomePage} />
        <Route exact path='/place' component={PlacePage} />
      </Switch>
    </Content>
  </Wrapper>

export default App

const Wrapper = styled.div`
  width: 100%;
`
const Content = styled.div`
  width: 100%;
  padding-top: 72px;
`