import { reduxForm } from 'redux-form'
import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { COMMENT_FORM } from '../../constants' 
import { addComment } from './actions'
import CommentsAdder from './CommentsAdder'

export default compose(
  connect(null, { addComment }),
  withProps(({ addComment, placeId }) => ({
    onClick: () => addComment(placeId)
  })),
  reduxForm({ 
    form: COMMENT_FORM
  })
)(CommentsAdder)