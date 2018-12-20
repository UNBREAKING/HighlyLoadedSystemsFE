import { handleActions } from 'redux-actions'
import { savePlace } from './actions'

const initialState = {
  places: {}
}

const placesInfo = handleActions({
  [savePlace]: (state, { payload: { id, data } }) =>
    ({ ...state, places: { ...state.places, [id]: data } })
}, initialState)

export default placesInfo