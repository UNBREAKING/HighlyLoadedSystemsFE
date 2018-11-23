import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MainInformation from './MainInformation'
import EventsAndComments from './EventsAndComments'

const PlacePage = () => 
  <Fragment>
    <Header>
      <Name>Ресторан "Hollywood"</Name>
      <MapButton to="/home">Посмотреть на карте</MapButton>
    </Header>
    <Carousel>
      тут должна быть карусель
    </Carousel>
    <ReserveWrapper>
      <ReserveTableButton to="/home">
        Бронь столика
      </ReserveTableButton>
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

const MapButton = styled(Link)`
`

const Carousel = styled.div`
  background: gray;
  height: 300px;
`

const ReserveWrapper = styled.div`
`

const ReserveTableButton = styled(Link)`
`

const Content = styled.div`
`