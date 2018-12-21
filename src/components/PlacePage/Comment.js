import React, { Fragment } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { setRelatedToId } from './actions'
import Comments from './Comments'
import { COLORS } from '../../constants'


const renderRelatedComments = ({ comments = [], placeId }) => 
  <RelatedWrapper>
    <Comments placeId={ placeId } comments={ comments } />
  </RelatedWrapper>

const mapStateToProps = ({ placesInfo: { places } = {}}, { placeId, relatedToId: toId }) =>
  ({
    comments: places[placeId].comments.filter(({ relatedToId }) => relatedToId === toId )
  })

const RelatedComments = compose(
  connect(mapStateToProps)
)(renderRelatedComments)

const Comment = ({ userName, comment, id, placeId, savedId, setRelatedToId }) =>
  <Fragment>
    <Wrapper selected={ savedId === id }>
      <User>
        { userName }
      </User>
      <Text>
        { comment }
        {
          id &&
            <Button onClick={ () => setRelatedToId(id)}>
              <Icon> reply</Icon>
            </Button>
        }
      </Text>
    </Wrapper>
    <RelatedComments placeId={ placeId } relatedToId={ id } />
  </Fragment>

const commentMapStateToProps = ({
  form: {
    comments: {
      values: {
        relatedToId: savedId
      } = {}
    } = {}
  } = {}
}) => ({ savedId })

export default connect(commentMapStateToProps, { setRelatedToId })(Comment)

const Wrapper = styled.div`
  border: 1px solid ${COLORS.darkGray};
  border-radius: 4px;
  box-shadow: 0 0 2px 0px  ${COLORS.gray};
  margin-bottom: 10px;
  padding: 5px 10px;
  ${props => props.selected && css`
    background: ${COLORS.green};
    color: ${COLORS.white};
  `}

  &:last-child {
    margin-bottom: 0;
  }
`

const User = styled.h4`
`

const Text = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`

const RelatedWrapper = styled.div`
  padding-left: 10px;
`