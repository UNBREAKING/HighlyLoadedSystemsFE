import React, { Fragment } from 'react'
import { withStateHandlers } from 'recompose'
import styled, { css } from 'styled-components'
import { COLORS } from '../../../constants'
import { Button } from '../'

const PlaceSelector = ({ typesOfTables = [], onSelect, selecedItem }) =>
  <Fragment>
    <Wrapper>
      { 
        typesOfTables.map(({ name, available }, index) => 
          <SelectButton 
            key={index}
            selected={ index === selecedItem }
            onClick={ () => onSelect(index) }
            disabled={ !available }>
            { name }
          </SelectButton>
        )
      }
    </Wrapper>
    <ReserveButton>
      Заказать
    </ReserveButton>
  </Fragment>

export default withStateHandlers(
  () => ({ selecedItem: null }),
  {
    onSelect: () => name => ({ selecedItem: name })
  }
)(PlaceSelector)

const Wrapper = styled.div`
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

const SelectButton = styled(Button)`
  background: none;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &:disabled {
    background: ${COLORS.gray};
  }

  ${props => props.selected && css`
    background: ${COLORS.lightblue};
  `}
`

const ReserveButton = styled(Button)`
  width: 100%;
`