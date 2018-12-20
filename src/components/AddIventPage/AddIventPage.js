import React from 'react'
import styled from 'styled-components'
import { 
  Input, 
  HeaderWithButton, 
  SmallItemListWrapper, 
  Places,
  Select
} from '../common'
import { MINUTES, HOURS } from '../../constants'

const AddIventPage = ({ places, addEvent, selectPlace, selectedId }) =>
  <Wrapper>
    <HeaderWithButton title="Создание события" onClick={ addEvent } buttonText="Сохранить" />
    <Content>
      <LeftContent>
        <Input label="Название события" fullWidth name="name" />
        <Input label="Количество свободных мест" fullWidth name="numberOfAllPlaces" />
        <Input label="Альтернативный адрес" fullWidth name="alternativeAddress" />
        <Input label="Описание" multiline fullWidth name="description" />
        <SmallItemListWrapper title="Ваши заведения">
          <Places places={ places } onItemClick={ selectPlace } selectedId={ selectedId } />
        </SmallItemListWrapper>
      </LeftContent>
      <RightContent>
        <DateWrapper>
          <Input label="Дата события" fullWidth date name="date" />
        </DateWrapper>
        <TimeWrapper>
          <Select name="hoursStart" label="Часы" values={ HOURS } />
          <Select name="minutesStart" label="Минуты" values={ MINUTES } />
        </TimeWrapper>
      </RightContent>
    </Content>
  </Wrapper>

export default AddIventPage

const Wrapper = styled.form`
  padding: 0 40px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LeftContent = styled.div`
  width: 45%;
`

const RightContent = styled.div`
  margin-left: 20px;
  width: 45%;
`

const DateWrapper = styled.div`
  width: 150px;
`

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`