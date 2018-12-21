import { createAction } from 'redux-actions'
import { change, focus } from 'redux-form'
import endpoints from '../../endpoints'

export const savePlace = createAction('PLACE_PAGE/SAVE_PLACE')

export const getPlace = id => dispatch => {
  const { place } = endpoints
  
  place({ urlKeys: { id } })
    .then(data => dispatch(savePlace({ id, data })))
}

export const saveComment = createAction('PLACE_PAGE/SAVE_COMMENT')

export const setRelatedToId = id => dispatch => {
  dispatch(
    change('comments', 'relatedToId', id)
  ),
  dispatch(
    focus('comments', 'comment')
  )
}