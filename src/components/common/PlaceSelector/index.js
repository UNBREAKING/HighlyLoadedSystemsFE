import React, { Fragment } from 'react'
import { withStateHandlers, compose, lifecycle } from 'recompose'
import styled, { css } from 'styled-components'
import { COLORS } from '../../../constants'
import { Button } from '../'

const PlaceSelector = ({ typesOfTables = [], onSelect, selecedItem, onClick }) =>
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
    <ReserveButton onClick={ () => onClick(selecedItem) }>
      Заказать
    </ReserveButton>
  </Fragment>

export default compose(
  withStateHandlers(
    () => ({ selecedItem: null }),
    {
      onSelect: () => name => ({ selecedItem: name })
    }
  ),
  lifecycle({
    componentDidUpdate({ selecedItem, onSelect }) {
      const { typesOfTables } = this.props

      if(selecedItem && !typesOfTables[selecedItem].available) {
        onSelect(null)
      }
    }
  })
)
(PlaceSelector)

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
  color: ${COLORS.darkGray};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${COLORS.white};
  }

  &:disabled {
    background: ${COLORS.gray};
    color: ${COLORS.white};
  }

  ${props => props.selected && css`
    background: ${COLORS.green};
    color: ${COLORS.white};
  `}
`

const ReserveButton = styled(Button)`
  width: 100%;
`