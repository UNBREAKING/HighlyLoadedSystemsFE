import { handleActions } from 'redux-actions'
import { savePlaces } from './actions'

const initialState = {
  places: []
}

const allPlaces = handleActions({
  [savePlaces]: (state, { payload }) => ({ ...state, places: payload })
}, initialState)

export default allPlaces