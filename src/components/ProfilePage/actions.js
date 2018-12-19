import endpoints from '../../endpoints'
import { createAction } from 'redux-actions'
import { push } from 'connected-react-router'
import { removeSiginIn } from '../Login/actions'

export const saveUsersProfile = createAction('PROFILE/SAVE_CURRENT_USER')

export const getProfile = () => dispatch => {
  const { profile } = endpoints

  profile()
    .then(data => {
      dispatch(saveUsersProfile(data))
    })
    .catch(error => {
      const response = error.response && error.response.data

      if (response.error === 'Forbidden') {
        dispatch(removeSiginIn())
        dispatch(push('/home'))
      }
    })
}