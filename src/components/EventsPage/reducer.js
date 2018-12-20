import { handleActions } from 'redux-actions'
import { saveEvents } from './actions'

const initialState = {
  events: []
}

const allEvents = handleActions({
  [saveEvents]: (state, { payload }) => ({ ...state, events: payload })
}, initialState)

export default allEvents