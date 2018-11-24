import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import { reducer as modal } from 'redux-modal'

const reducers = combineReducers({
  form: reduxFormReducer,
  router: routerReducer,
  modal
})

export default reducers