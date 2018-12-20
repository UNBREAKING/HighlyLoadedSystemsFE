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
  AddIventPage,
  ReservePlace,
  ReserveEvent
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
        <Route exact path='/all-places' component={PlacesPage} />
        <Route exact path='/all-events' component={EventsPage} />
        <Route exact path='/all-places/:id' component={PlacePage} />
        <Route exact path='/user-profile' component={ProfilePage} />
        <Route exact path='/user-profile/add-place' component={AddPlacePage} />
        <Route exact path='/user-profile/add-event' component={AddIventPage} />
        <Route exact path='/reserve-place' component={ReservePlace} />
        <Route exact path='/reserve-event' component={ReserveEvent} />
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