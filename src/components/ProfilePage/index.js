import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getProfile } from './actions'
import ProfilePage from './ProfilePage'

const mapStateToProps = ({ profiles: { currentUserProfile } }) => ({ currentUserProfile })

export default compose(
  connect(mapStateToProps, { getProfile }),
  lifecycle({
    componentDidMount() {
      const { getProfile } = this.props
      
      getProfile()
    }
  })
)(ProfilePage)