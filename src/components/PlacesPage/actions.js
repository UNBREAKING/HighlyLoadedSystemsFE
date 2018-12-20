import endpoints from '../../endpoints'
import { createAction } from 'redux-actions'

export const savePlaces = createAction('PLACES/SAVE_PLACES')

export const getAllPlaces  = () => (dispatch, getState) => {
  const { allPlaces } = endpoints
  const { 
    form: { 
      filtersPlaces: { 
        values: { 
          hasActiveEvents = false 
        } = {}
      } = {}
    } = {} 
  } = getState()

  allPlaces({ params: { hasActiveEvents } })
    .then(data => dispatch(savePlaces(data)))
}