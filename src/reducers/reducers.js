import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { reducer as modal } from 'redux-modal'
import login from '../components/Login/reducer'
import profiles from '../components/ProfilePage/reducer'
import userPlaces from '../components/AddIventPage/reducer'
import allPlaces from '../components/PlacesPage/reducer'
import allEvents from '../components/EventsPage/reducer'

const reducers = history => combineReducers({
  form: reduxFormReducer,
  router: connectRouter(history),
  modal,
  login,
  profiles,
  userPlaces,
  allPlaces,
  allEvents
})

export default reducers