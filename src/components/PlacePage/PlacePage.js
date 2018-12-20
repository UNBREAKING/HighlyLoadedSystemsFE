import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CommonLinkButton } from '../common'
import MainInformation from './MainInformation'
import EventsAndComments from './EventsAndComments'

const PlacePage = ({ 
  place: {
    address, 
    comments, 
    description, 
    events,
    name,
    time,
  },
  match: {
    params: {
      id
    } = {}
  }
}) => 
  <Fragment>
    <Header>
      <Name>{ name} </Name>
      <CommonLinkButton to="/home">Посмотреть на карте</CommonLinkButton>
    </Header>
    <Carousel>
      тут должна быть карусель
    </Carousel>
    <ReserveWrapper>
      <CommonLinkButton to={`/all-places/${id}/reserve`}>
        Бронь столика
      </CommonLinkButton>
    </ReserveWrapper>
    <Content>
      <MainInformation 
        address={ address}
        time={ time } 
        description= { description }/>
      <EventsAndComments events={events} comments={ comments } placeId={id} />
    </Content>
  </Fragment>

export default PlacePage

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 15px;
  align-items: center;  
`

const Name = styled.h1`
`

const Carousel = styled.div`
  background: gray;
  height: 300px;
  padding-bottom: 15px;
`

const ReserveWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 20px;
`

const Content = styled.div`
`