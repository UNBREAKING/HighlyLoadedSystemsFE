export const COLORS = {
  orange: '#ffb488',
  lightblue: '#6BAAFF',
  linkblue: '#007bff',
  lightred: 'rgba(220, 57, 57, 0.6)',
  black: 'black',
  gray: '#9C9C9C'
}

export const LOGIN_FORM = "login"
export const REGISTER_FORM = "register"
export const ADD_PLACE_FORM = "addPlace"
export const ADD_EVENT_FORM = "addEvent"
export const PLACES_FILTERS = "filtersPlaces"
export const EVENTS_FILTERS = "filtersEvents"
export const RESERVE_TIME = 'reserveTime'

export const MINUTES = new Array(4).fill(1)
  .map((item, index) => 
    ({ value: index * 15, name: index === 0 ? "00" : index * 15 })
  )



export const HOURS = new Array(24).fill(1)
  .map((item, index) =>
    ({
      value: index,
      name: index < 10 ? `0${index}`: index
    })
  )