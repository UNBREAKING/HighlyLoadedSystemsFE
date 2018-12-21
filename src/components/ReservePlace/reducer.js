import { handleActions } from 'redux-actions'
import { savePlace, clearPlaceReservePage } from './actions'

const initialState = {
}

const placeReserve = handleActions({
  [savePlace]: (state, { payload }) => ({ 
    ...state, 
    ...payload, 
    typesOfTables: payload.typesOfTables || []
  }),
  [clearPlaceReservePage]: () => initialState
}, initialState)

export default placeReserve