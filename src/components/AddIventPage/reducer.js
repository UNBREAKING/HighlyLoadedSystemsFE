import { handleActions } from 'redux-actions'
import { addUserPlaces } from './actions'

const initialState = {
  places: []
}

const userPlaces = handleActions({
  [addUserPlaces]: (state, { payload }) => ({ ...state, places: payload })
}, initialState)

export default userPlaces