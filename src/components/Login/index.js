import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { openLoginModal, userIsSignedIn } from './actions'
import { getSessionCookie } from '../../helpers'
import Login from './Login'

const mapStateToProps = ({ login: { isUserSignedIn } = {} }) => ({ isUserSignedIn })

const dispatchToProps = {
  openLoginModal,
  userIsSignedIn
}

export default compose(
  connect(mapStateToProps, dispatchToProps),
  lifecycle({
    componentDidMount() {
      const { userIsSignedIn } = this.props

      console.log(getSessionCookie())
      
      if(getSessionCookie()) {
        userIsSignedIn()
      }
    }
  })
)(Login)