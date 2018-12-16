import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import {
  HomePage,
  Header,
  Login,
  PlacePage,
  Modals,
  PlacesPage,
  EventsPage,
  ProfilePage,
  AddPlacePage,
  AddIventPage
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
        <Route exact path='/places' component={PlacesPage} />
        <Route exact path='/events' component={EventsPage} />
        <Route exact path='/place' component={PlacePage} />
        <Route exact path='/profile' component={ProfilePage} />
        <Route exact path='/add-place' component={AddPlacePage} />
        <Route exact path='/add-event' component={AddIventPage} />
      </Switch>
    </Content>
    <Modals />
  </Wrapper>

export default App

const Wrapper = styled.div`
  width: 100%;
`
const Content = styled.div`
  width: 100%;
  padding-top: 72px;
`