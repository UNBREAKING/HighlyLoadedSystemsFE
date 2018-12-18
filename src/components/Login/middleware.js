import { 
  userIsSignedIn, 
  checkIfUserIsSignedIn, 
  removeSiginIn 
} from './actions'
import { USER_IS_SIGNED_IN } from './constants'

const SignInMiddleware = ({ dispatch, getState }) => next => action => {
  if(action.type === String(userIsSignedIn)) {
    localStorage.setItem(USER_IS_SIGNED_IN, true)
  }

  if(action.type === String(checkIfUserIsSignedIn)) {
    const loginFlag = localStorage.getItem(USER_IS_SIGNED_IN)

    if (loginFlag) {
      dispatch(userIsSignedIn())
    }
  }

  if(action.type === String(removeSiginIn)) {
    localStorage.removeItem(USER_IS_SIGNED_IN)
  }
  
  return next(action)
}

export default SignInMiddleware