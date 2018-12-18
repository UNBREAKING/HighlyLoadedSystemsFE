import React, { Fragment } from 'react'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { FieldArray } from 'redux-form'
import { Input, Button } from '../common'
import { COLORS } from '../../constants'

const Seat = ({ seat, onClick }) => 
  <SeatWrapper>
    <InputWrapper>
      <Input label="Тип места" fullWidth name={`${seat}.name`} /> 
    </InputWrapper>
    <InputWrapper>
      <Input label="Количество" fullWidth number name={`${seat}.number`} />
    </InputWrapper>
    <RemoveButton onClick={ onClick }>
      <Icon fontSize="large">  
        indeterminate_check_box
      </Icon>
    </RemoveButton>
  </SeatWrapper>

const renderSeats = ({ fields }) =>
  <div>
    {
      fields.map((seat, index) =>
        <Seat seat={ seat } key={ index } onClick={ () => fields.remove(index) } />
      )
    }
    <Button onClick={ () => fields.push({}) }>
      Добавить
    </Button>
  </div>

const SeatAdder = () =>
  <Fragment>
    <h2>
      Типы мест
    </h2>
    <FieldArray name="typesOfTables" component={renderSeats} />
  </Fragment>

export default SeatAdder

const SeatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`

const RemoveButton = styled(Button)`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  box-shadow: none;
  color: ${COLORS.green};
  
  &:hover {
    background: none;
    border: none;
    color: ${COLORS.darkGreen};
  }
`
const InputWrapper = styled.span`
  padding-right: 40px;
`