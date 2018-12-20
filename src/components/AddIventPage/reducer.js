import { handleActions } from 'redux-actions'
import { addUserPlaces, selectPlace } from './actions'

const initialState = {
  places: [],
  selectedId: null
}

const userPlaces = handleActions({
  [addUserPlaces]: (state, { payload }) => ({ ...state, places: payload }),
  [selectPlace]: (state, { payload }) => ({ ...state, selectedId: payload })
}, initialState)

export default userPlaces