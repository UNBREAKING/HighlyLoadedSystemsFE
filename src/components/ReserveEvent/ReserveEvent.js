import React from 'react'
import styled from 'styled-components'
import { PlaceSelector, ReserveForm } from '../common'
import Description from './Description'

const ReserveEvent = ({ typesOfTables, reserveEvent }) => 
  <Wrapper>
    <Title>Событие: День Святого Патрика</Title>
    <Header>
      <SmallTitle>
        Место: Irish Clever Pub
      </SmallTitle>
      <TimeAndDate>
        <Time>
          Начало: 11.00
        </Time>
        <Date>
          Дата: 22.03.2018
        </Date>
      </TimeAndDate>
    </Header>
    <ImageWrapper />
    <SelectContent>
      <LeftContent>
        <PlaceSelector typesOfTables={ typesOfTables } onClick={ reserveEvent } />
      </LeftContent>
      <RightContent>
        <ReserveForm />
        <Description description="описание тут"/>
      </RightContent>
    </SelectContent>
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