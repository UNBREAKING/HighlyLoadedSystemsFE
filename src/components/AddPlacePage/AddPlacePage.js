import React from 'react'
import styled from 'styled-components'
import { Input, HeaderWithButton } from '../common'
import WorkingHours from './WorkingHours'
import SeatAdder from './SeatAdder'

const AddPlacePage = ({ addPlaceHandler }) =>
  <Wrapper>
    <HeaderWithButton title="Создание заведения" onClick={ addPlaceHandler } buttonText="Сохранить" />
    <Content>
      <LeftContent>
        <Input label="Название заведния" fullWidth name="name" />
        <Input label="Количество свободных мест" fullWidth name="numberOfAllPlaces" />
        <Input label="Адрес" fullWidth name="address" />
        <Input label="Описание" multiline fullWidth name="description" />
        <SeatAdder />
      </LeftContent>
      <RightContent>
        <WorkingHours />
      </RightContent>
    </Content>
  </Wrapper>

export default AddPlacePage

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