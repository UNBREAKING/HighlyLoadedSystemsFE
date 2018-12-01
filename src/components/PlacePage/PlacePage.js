import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CommonLinkButton } from '../common'
import MainInformation from './MainInformation'
import EventsAndComments from './EventsAndComments'

const PlacePage = () => 
  <Fragment>
    <Header>
      <Name>Ресторан "Hollywood"</Name>
      <CommonLinkButton to="/home">Посмотреть на карте</CommonLinkButton>
    </Header>
    <Carousel>
      тут должна быть карусель
    </Carousel>
    <ReserveWrapper>
      <CommonLinkButton to="/home">
        Бронь столика
      </CommonLinkButton>
    </ReserveWrapper>
    <Content>
      <MainInformation />
      <EventsAndComments />
    </Content>
  </Fragment>

export default PlacePage

const Header = styled.div`
`

const Name = styled.h1`

`

const Carousel = styled.div`
  background: gray;
  height: 300px;
`

const ReserveWrapper = styled.div`
`

const Content = styled.div`
`