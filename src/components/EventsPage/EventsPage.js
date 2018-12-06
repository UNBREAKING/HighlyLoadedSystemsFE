import React from 'React'
import styled from 'styled-components'
import { BigItemListWrapper } from '../common'
import EventBlocks from './EventBlocks'

const EventsPage = () =>
  <Wrapper>
    <FiltersBlock>
      тут будут фильтры
    </FiltersBlock>
    <Items>
      <BigItemListWrapper text="Загрузите еще 15 событий">
        <EventBlocks/>
      </BigItemListWrapper>
    </Items>
  </Wrapper>

export default EventsPage

const Wrapper = styled.div`
  display: flex;
`

const FiltersBlock = styled.div`
  width: 30%;
  padding: 0 30px;
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding-right: 30px;
`