import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { ADD_PLACE_FORM } from '../../constants'
import { workingHours } from './initialData'
import { addPlaceHandler } from './actions'
import AddPlacePage from './AddPlacePage'

const mapStateToProps = () => ({
  initialValues: { workingHours }
})

export default compose(
  connect(mapStateToProps, { addPlaceHandler }),
  reduxForm({
  form: ADD_PLACE_FORM
  })
)(AddPlacePage)
