import { connectModal } from 'redux-modal'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { hideLoginModal } from '../actions'
import { LOGIN_MODAL_NAME } from '../constants'
import LoginModal from './LoginModal'

const dispatchToProps = { hideLoginModal }

export default compose(
  connectModal({ 
    name: LOGIN_MODAL_NAME
  }),
  connect(null, dispatchToProps)
)(LoginModal)