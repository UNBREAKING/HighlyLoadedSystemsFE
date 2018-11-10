import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  form: reduxFormReducer,
  router: routerReducer
})

export default reducers