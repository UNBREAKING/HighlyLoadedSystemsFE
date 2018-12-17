import React from 'react'
import styled from 'styled-components'
import { reduxForm } from 'redux-form'
import { RESERVE_TIME, HOURS, MINUTES } from '../../../constants'
import { Input, Select } from '../'

const ReserveForm = () => 
  <Form>
    <Title>
      Время
    </Title>
    <Content>
      <TimeAndUserData>
        <Selects>
          <Select name="hoursStart" label="Часы" values={ HOURS } />
          <Select name="minutesStart" label="Минуты" values={ MINUTES } />
          <Input label="Дата" fullWidth date name="date" />
        </Selects>
        <Title>
        Общие данные
        </Title>
        <Input label="Имя" fullWidth name="name" />
        <Input label="Номер телефона" fullWidth name="number" />
      </TimeAndUserData>
      <Comment>
        <Input label="Комментарий" multiline fullWidth name="description" />
      </Comment>
    </Content>
  </Form>

export default reduxForm({
  form: RESERVE_TIME
})(ReserveForm)

const Form = styled.form`
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

const Selects = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

const Title = styled.h3`
`

const TimeAndUserData = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 20px;
`

const Comment = styled.div`
  width: 50%;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
`