import { createAction } from 'redux-actions'
import { push } from 'connected-react-router'
import endpoints from '../../endpoints'
import { initialize } from 'redux-form'
import { DEFAULT_TIME_QUERY } from '../../constants'

export const saveEvent = createAction('EVENT_PAGE/SAVE_EVENT')
export const clearEventPage = createAction('EVENT_PAGE/CLEAN_EVENT_PAGE')

export const getEvent = id => dispatch => {
  const { event } = endpoints
  
  event({ urlKeys: { id }, params: { ...DEFAULT_TIME_QUERY } })
    .then(data => { 
      dispatch(saveEvent(data))

      dispatch(
        initialize(
          'reserveTime', 
          {
          hoursStart: DEFAULT_TIME_QUERY.hours,
          minutesStart: DEFAULT_TIME_QUERY.minutes,
          date: data.date,
          name: data.userName || "",
          number: data.userPhoneNumber || ""
        })
      )
    })
}

export const getCurrentEvent = id => (dispatch, getState) => {
  const { event } = endpoints
  
  const {
    form: {
      reserveTime: {
        values: {
          hoursStart: hours,
          minutesStart: minutes,
          date,
        } = {}
      } = {}
    } = {}
  } = getState()

  event({ urlKeys: { id }, params: { hours, minutes, date } })
    .then(data => { 
      dispatch(saveEvent(data))
    })
}

export const reserveEvent = idOfTable => (dispatch, getState) =>{
  const { reserve } = endpoints
  
  const {
    form: {
      reserveTime: {
        values: {
          hoursStart,
          minutesStart,
          date,
          description,
          name: userName,
          number: userPhoneNumber
        } = {}
      } = {}
    } = {}
  } = getState()

  reserve({
    idOfTable,
    hoursStart,
    minutesStart,
    date,
    description,
    userName,
    type: "EVENT",
    userPhoneNumber
  }).then(()=> dispatch(push('/all-events')))
}