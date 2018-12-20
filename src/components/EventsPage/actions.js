import endpoints from '../../endpoints'
import { createAction } from 'redux-actions'

export const saveEvents = createAction('EVENTS/SAVE_EVENTS')

export const getAllEvents = () => (dispatch, getState) => {
  const { getEvents } = endpoints
  const { 
    form: { 
      filtersEvents: { 
        values: { 
          hasEnded = false 
        } = {}
      } = {}
    } = {} 
  } = getState()

  getEvents({ params: { isEnded: hasEnded } })
    .then(data => dispatch(saveEvents(data)))
}