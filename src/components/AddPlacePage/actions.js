import endpoints from '../../endpoints'

export const addPlaceHandler = () => (dispatch, getState) => {
  const { addPlace } = endpoints

  const { 
    form: {
      addPlace: {
        values: {
          workingHours,
          name,
          numbeOfAllPlaces: fullNumberOfPlaces,
          address,
          description,
          typeOfTables
        } = {}
      } = {}
    } = {}
  } = getState()

  addPlace({
    workingHours,
    name,
    fullNumberOfPlaces,
    address,
    description,
    typeOfTables
  })
  .then(data => console.log(data))
}