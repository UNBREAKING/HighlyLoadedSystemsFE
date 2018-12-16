import React from 'react'
import styled from 'styled-components'
import { Input, Button } from '../common'
import WorkingHours from './WorkingHours'
import SeatAdder from './SeatAdder'

const AddPlacePage = () =>
  <Wrapper>
    <Header>
      <Title>
        Создание заведения
      </Title>
      <Button>
        Сохранить
      </Button>
    </Header>
    <Content>
      <LeftContent>
        <Input label="Название заведния" fullWidth name="name" />
        <Input label="Количество свободных мест" fullWidth name="numberOfPlaces" />
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
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