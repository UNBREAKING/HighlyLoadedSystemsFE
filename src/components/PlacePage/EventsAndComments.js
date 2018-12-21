import React from 'react'
import styled from 'styled-components'
import { SmallItemListWrapper } from '../common'
import { CommentsAdder } from '../'
import Events from './Events'
import Comments from './Comments'

const EventsAndComments = ({ events, placeId, comments = [] }) =>
  <Wrapper>
    <SmallItemListWrapper title="События">
      <Events events={ events } />
    </SmallItemListWrapper>
    <SmallItemListWrapper title="Комментарии">
      <Comments placeId={ placeId } comments={ comments.filter(({ relatedToId }) => !relatedToId ) } />
    </SmallItemListWrapper>
    <CommentsAdder placeId={ placeId } />
  </Wrapper>

export default EventsAndComments

const Wrapper = styled.div`
  display: inline-block;
  width: 50%;
  padding: 0 20px;
`
