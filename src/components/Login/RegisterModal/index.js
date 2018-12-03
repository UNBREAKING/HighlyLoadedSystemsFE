import { connectModal } from 'redux-modal'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { hideRegisterModalAndOpenLoginModal } from '../actions'
import { REGISTER_MODAL } from '../constants'
import RegisterModal from './RegisterModal'

const dispatchToProps = { hideRegisterModalAndOpenLoginModal }

export default compose(
  connectModal({ 
    name: REGISTER_MODAL
  }),
  connect(null, dispatchToProps)
)(RegisterModal)