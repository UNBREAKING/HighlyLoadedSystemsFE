import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { openLoginModal, checkIfUserIsSignedIn, signout } from './actions'
import Login from './Login'

const mapStateToProps = ({ login: { isUserSignedIn } = {} }) => ({ isUserSignedIn })

const dispatchToProps = {
  openLoginModal,
  checkIfUserIsSignedIn,
  signout
}

export default compose(
  connect(mapStateToProps, dispatchToProps),
  lifecycle({
    componentDidMount() {
      const { checkIfUserIsSignedIn } = this.props
      
      checkIfUserIsSignedIn()
    }
  })
)(Login)