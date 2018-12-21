import { handleActions } from 'redux-actions'
import { saveEvent, clearEventPage } from './actions'

const initialState = {
}

const eventReserve = handleActions({
  [saveEvent]: (state, { payload }) => ({ ...state, ...payload }),
  [clearEventPage]: () => initialState
}, initialState)

export default eventReserve