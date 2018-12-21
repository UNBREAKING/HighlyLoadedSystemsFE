import { handleActions } from 'redux-actions'
import { saveEvent, clearEventPage } from './actions'

const initialState = {
}

const eventReserve = handleActions({
  [saveEvent]: (state, { payload }) => ({ 
    ...state, 
    ...payload, 
    place: payload.place || {},
    event: payload.event || {},
    typesOfTables: payload.typesOfTables || []
  }),
  [clearEventPage]: () => initialState
}, initialState)

export default eventReserve