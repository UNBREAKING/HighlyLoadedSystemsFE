import { createAction } from 'redux-actions'
import { push } from 'connected-react-router'
import endpoints from '../../endpoints'
import { initialize } from 'redux-form'
import { DEFAULT_TIME_QUERY } from '../../constants'

export const savePlace = createAction('PLACE_RESERVE_PAGE/SAVE_PLACE_INFO')
export const clearPlaceReservePage = createAction('PLACE_RESERVE_PAGE/CLEAN_PLACE_RESERVE_PAGE')

export const getPlaceReserve = id => dispatch => {
  const { placeReserve } = endpoints
  
  placeReserve({ urlKeys: { id }, params: { ...DEFAULT_TIME_QUERY } })
    .then(data => { 
      dispatch(savePlace(data))

      dispatch(
        initialize(
          'reserveTime', 
          {
          hoursStart: DEFAULT_TIME_QUERY.hours,
          minutesStart: DEFAULT_TIME_QUERY.minutes,
          date: DEFAULT_TIME_QUERY.date,
          name: data.userName || "",
          number: data.userPhoneNumber || ""
        })
      )
    })
}

export const getCurrentPlaceReserve = id => (dispatch, getState) => {
  const { placeReserve } = endpoints
  
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

  placeReserve({ urlKeys: { id }, params: { hours, minutes, date } })
    .then(data => { 
      dispatch(savePlace(data))
    })
}

export const reservePlace = idOfTable => (dispatch, getState) =>{
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
    type: "PLACE",
    userPhoneNumber
  }).then(()=> dispatch(push('/all-places')))
}