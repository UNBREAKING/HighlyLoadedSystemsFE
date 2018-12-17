import { handleActions } from 'redux-actions'
import { userIsSignedIn } from './actions'

const initialState = {
  isUserSignedIn: false
}

const login = handleActions({
  [userIsSignedIn]: state => ({ ...state, isUserSignedIn: true })
}, initialState)

export default login