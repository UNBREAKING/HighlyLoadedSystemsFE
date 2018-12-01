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
`

const FiltersBlock = styled.div`
`

const Items = styled.div`
`