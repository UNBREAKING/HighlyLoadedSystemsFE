import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import login from '../components/Login/reducer'

const reducers = combineReducers({
  form: reduxFormReducer,
  router: routerReducer,
  login
})

export default reducers