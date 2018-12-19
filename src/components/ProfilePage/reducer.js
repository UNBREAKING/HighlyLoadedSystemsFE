import { handleActions } from 'redux-actions'
import { saveUsersProfile } from './actions'

const initialState = {
  currentUserProfile: {},
  otherProfiles: {}
}

const profiles = handleActions({
  [saveUsersProfile]: (state, { payload }) => ({ ...state, currentUserProfile: payload })
}, initialState)

export default profiles