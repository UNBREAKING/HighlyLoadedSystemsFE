import { connect } from 'react-redux'
import { openLoginModal } from './actions'
import Login from './Login'

const dispatchToProps = {
  openLoginModal
}

export default connect(null, dispatchToProps)(Login)