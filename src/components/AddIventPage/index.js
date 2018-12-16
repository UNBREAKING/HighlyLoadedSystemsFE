import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { ADD_EVENT_FORM } from '../../constants'
import AddIventPage from './AddIventPage'


export default compose(
  connect(null),
  reduxForm({
  form: ADD_EVENT_FORM
  })
)(AddIventPage)