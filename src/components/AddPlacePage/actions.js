import endpoints from '../../endpoints'
import { push } from 'connected-react-router'

export const addPlaceHandler = () => (dispatch, getState) => {
  const { addPlace } = endpoints

  const { 
    form: {
      addPlace: {
        values: {
          workingHours,
          name,
          numberOfAllPlaces: fullNumberOfPlaces,
          address,
          description,
          typesOfTables
        } = {}
      } = {}
    } = {}
  } = getState()

  addPlace({
    workingHours: workingHours.map(({ day, end, start }) => ({ day, end, start })),
    name,
    fullNumberOfPlaces: Number(fullNumberOfPlaces),
    address,
    rating: 0,
    description,
    typesOfTables: typesOfTables.map(({ name, number }) => ({ name, number: Number(number) }))
  })
  .then(({ status }) => {
    if(status === 'success') {
      dispatch(push('/user-profile'))
    }
  })
}