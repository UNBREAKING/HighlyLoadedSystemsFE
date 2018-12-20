import endpoints from '../../endpoints'
import { createAction } from 'redux-actions'
import { push } from 'connected-react-router'
import { removeSiginIn } from '../Login/actions'

export const addUserPlaces = createAction('ADD_EVENT/SAVE_CURRENT_USER')

export const getProfile = () => dispatch => {
  const { placesProfile } = endpoints

  placesProfile()
    .then(data => {
      dispatch(addUserPlaces(data))
    })
    .catch(error => {
      const response = error.response && error.response.data

      if (response.error === 'Forbidden') {
        dispatch(removeSiginIn())
        dispatch(push('/home'))
      }
    })
}