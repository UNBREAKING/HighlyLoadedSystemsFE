import React from 'react'
import styled from 'styled-components'
import { SmallItemListWrapper } from '../common'
import Events from './Events'

const EventsAndComments = ({ events }) =>
  <Wrapper>
    <SmallItemListWrapper title="События">
      <Events events={ events } />
    </SmallItemListWrapper>
    <SmallItemListWrapper title="Комментарии">
      тут будут все комменты юзера с кнопкой добавления коммента.
    </SmallItemListWrapper>
  </Wrapper>

export default EventsAndComments

const Wrapper = styled.div`
  display: inline-block;
  width: 50%;
  padding: 0 20px;
`
