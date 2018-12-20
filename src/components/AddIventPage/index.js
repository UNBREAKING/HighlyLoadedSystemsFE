import { reduxForm } from 'redux-form'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { ADD_EVENT_FORM } from '../../constants'
import { getProfile } from './actions'
import AddIventPage from './AddIventPage'

const mapStateToProps = ({
  userPlaces: {
    places
  } = {}
}) => ({ places })

export default compose(
  connect(mapStateToProps, { getProfile }),
  reduxForm({
    form: ADD_EVENT_FORM
  }),
  lifecycle({
    componentDidMount() {
      const { getProfile } = this.props

      getProfile()
    }
  })
)(AddIventPage)