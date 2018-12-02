import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router'
import { reducer as modal } from 'redux-modal'

const reducers = history => combineReducers({
  form: reduxFormReducer,
  router: connectRouter(history),
  modal
})

export default reducers