import React, { Fragment } from 'react'
import styled from 'styled-components'
import { PlaceSelector, ReserveForm } from '../common'
import Description from './Description'

const ReserveEvent = ({ 
  typesOfTables, 
  reserveEvent, 
  date, 
  time, 
  placeName, 
  eventName,
  address
}) => 
  <Wrapper>
    {
      typesOfTables.length > 0 && 
        <Title>Событие: { eventName }</Title>
    }
    <Header>
      <SmallTitle>
        { 
          typesOfTables.length ? 
            `Место: ${placeName}, ${address}` : 
            `Событие: ${eventName}` 
        }
      </SmallTitle>
      <TimeAndDate>
        <Time>
          Начало: {time}
        </Time>
        <Date>
          Дата: {date}
        </Date>
      </TimeAndDate>
    </Header>
    <ImageWrapper />
    {
      typesOfTables.length > 0 ? 
        <Fragment>
          <SelectContent>
            <LeftContent>
              <PlaceSelector typesOfTables={ typesOfTables } onClick={ reserveEvent } />
            </LeftContent>
            <RightContent>
              <ReserveForm />
              <Description description="описание тут"/>
            </RightContent>
          </SelectContent>    
        </Fragment> :
        <Description description="описание тут" />
    }
  </Wrapper>

export default ReserveEvent

const Wrapper = styled.div`
`

const Title = styled.h1`
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const SmallTitle = styled.h2`
`

const TimeAndDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const Time = styled.div`
  font-size: 32px;
  margin-right: 40px;
`

const Date = styled.div`
  font-size: 32px;
`

const ImageWrapper = styled.div`
  background: gray;
  height: 300px;
  padding-bottom: 15px;
`

const SelectContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
`

const LeftContent = styled.div`
  width: 30%;
`

const RightContent = styled.div`
  width: 70%;
  padding-left: 20px;
`