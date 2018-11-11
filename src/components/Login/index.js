import { connect } from 'react-redux'
import { toggleLogin } from './actions'
import Login from './Login'

const dispatchToProps = {
  toggleLogin
}

const mapStateToProps = ({
  login: {
    isLoginOpen
  }
}) => ({
  isLoginOpen
})

export default connect(mapStateToProps, dispatchToProps)(Login)