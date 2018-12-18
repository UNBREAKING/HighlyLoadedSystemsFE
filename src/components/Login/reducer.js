import { handleActions } from 'redux-actions'
import { userIsSignedIn, removeSiginIn } from './actions'

const initialState = {
  isUserSignedIn: false
}

const login = handleActions({
  [userIsSignedIn]: state => ({ ...state, isUserSignedIn: true }),
  [removeSiginIn]: state => ({ ...state, isUserSignedIn: false })
}, initialState)

export default login