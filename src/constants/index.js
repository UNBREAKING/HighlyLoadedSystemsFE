export const COLORS = {
  orange: '#ffb488',
  white: '#ffff',
  lightblue: '#6BAAFF',
  linkblue: '#007bff',
  lightred: 'rgba(220, 57, 57, 0.6)',
  black: 'black',
  gray: '#9C9C9C',
  darkGray: 'rgb(72, 72, 72)',
  green: 'rgb(0, 132, 137)',
  darkGreen: 'rgb(0, 97, 101)',
  darkred: 'rgb(166, 29, 85)'
}

export const LOGIN_FORM = "login"
export const REGISTER_FORM = "register"
export const ADD_PLACE_FORM = "addPlace"
export const ADD_EVENT_FORM = "addEvent"
export const PLACES_FILTERS = "filtersPlaces"
export const EVENTS_FILTERS = "filtersEvents"
export const RESERVE_TIME = 'reserveTime'

export const GENERAL_CLIENT = 'GENERAL_CLIENT'
export const BUSINESS_CLIENT = 'BUSINESS_CLIENT'

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
