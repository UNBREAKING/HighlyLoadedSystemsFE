import { createAction } from 'redux-actions'
import endpoints from '../../endpoints'

export const savePlace = createAction('PLACE_PAGE/SAVE_PLACE')

export const getPlace = id => dispatch => {
  const { place } = endpoints
  
  place({ urlKeys: { id } })
    .then(data => dispatch(savePlace({ id, data })))
}