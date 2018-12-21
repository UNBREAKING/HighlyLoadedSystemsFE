import { change } from 'redux-form'
import endpoints from '../../endpoints'
import { saveComment } from '../PlacePage/actions'

export const addComment = placeId => (dispatch, getState) => {
  const { addComment } = endpoints

  const {
    form: {
      comments: {
        values: {
          comment,
          relatedToId = null
        } = {}
      } = {}
    } = {}
  } = getState()

  addComment({ 
    placeId, 
    relatedToId: relatedToId, 
    text: comment })
    .then(() => {
      dispatch(
        saveComment({ 
          placeId, 
          relatedToId: relatedToId, 
          comment 
        })
      )
      dispatch(
        change('comments', 'comment','')
      )
    })
}