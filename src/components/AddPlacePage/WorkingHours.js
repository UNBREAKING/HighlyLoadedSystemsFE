import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FieldArray, Field } from 'redux-form'
import { Input } from '../common'

const renderDay = ({ input: { value }}) => value

const Day = ({ day }) => 
  <DayWrapper>
    <Date>
      <Field name={`${day}.fullDescription`} component={ renderDay }/>
    </Date>
    <Date>
      <Input label="Начало" fullWidth date name={`${day}.start`} />
    </Date>
    <Date>
      <Input label="Конец" fullWidth date name={`${day}.end`} />
    </Date>
  </DayWrapper>

const renderDays = ({ fields }) => 
  fields.map((day, index) =>
    <Day day={day} key={index} />
  )

const WorkingHours = () => 
  <Fragment>
    <Title>
      Время работы
    </Title>
    <FieldArray name="workingHours" component={renderDays}/>
  </Fragment>

export default WorkingHours

const DayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center ;
  justify-content: space-between;
`

const Date= styled.span`
  width: 150px;
`

const Title = styled.h2`
`