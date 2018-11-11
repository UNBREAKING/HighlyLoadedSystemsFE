import { handleActions } from 'redux-actions'
import { toggleLogin } from './actions'

const initialState = {
  isLoginOpen: false
}

const login = handleActions({
  [toggleLogin]: state => ({ ...state, isLoginOpen: !state.isLoginOpen })
}, initialState)

export default login