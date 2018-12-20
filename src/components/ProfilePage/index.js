import { compose, lifecycle, withProps } from 'recompose'
import { connect } from 'react-redux'
import { getProfile } from './actions'
import { BUSINESS_CLIENT } from '../../constants'
import ProfilePage from './ProfilePage'

const mapStateToProps = ({ profiles: { currentUserProfile } }) => ({ currentUserProfile })

export default compose(
  connect(mapStateToProps, { getProfile }),
  withProps(({
    currentUserProfile: {
      role
    }
  }) => ({
    hidePlaces: role !== BUSINESS_CLIENT 
  })),
  lifecycle({
    componentDidMount() {
      const { getProfile } = this.props
      
      getProfile()
    }
  })
)(ProfilePage)