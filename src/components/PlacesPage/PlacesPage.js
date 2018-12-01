import React from 'React'
import styled from 'styled-components'
import { BigItemListWrapper } from '../common'
import PlaceBlocks from './PlaceBlocks'

const PlacesPage = () =>
  <Wrapper>
    <FiltersBlock>
      тут будут фильтры
    </FiltersBlock>
    <Items>
      <BigItemListWrapper text="Загрузите еще 15 мест">
        <PlaceBlocks />
      </BigItemListWrapper>
    </Items>
  </Wrapper>

export default PlacesPage

const Wrapper = styled.div`
`

const FiltersBlock = styled.div`
`

const Items = styled.div`
`