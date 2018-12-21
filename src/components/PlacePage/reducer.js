import { handleActions } from 'redux-actions'
import { savePlace, saveComment } from './actions'

const initialState = {
  places: {}
}

const placesInfo = handleActions({
  [savePlace]: (state, { payload: { id, data } }) =>
    ({ ...state, places: { ...state.places, [id]: data } }),
  [saveComment]: (state, { payload }) =>
    ({
      ...state,
      places: {
        ...state.places,
        [payload.placeId]: {
          ...state.places[payload.placeId],
          comments: [ ...state.places[payload.placeId].comments, payload ]
        }
      }
    })
}, initialState)

export default placesInfo