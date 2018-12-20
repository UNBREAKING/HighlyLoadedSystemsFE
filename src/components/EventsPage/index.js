import EventsPage from './EventsPage'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose' 
import { getAllEvents } from './actions'

const mapStateToProps = ({
  form: { 
    filtersEvents: { 
      values: { 
        hasEnded = false 
      } = {}
    } = {}
  } = {} 
}) => ({ hasEnded })

export default compose(
  connect(mapStateToProps, { getAllEvents }),
  lifecycle({
    componentDidMount() {
      const { getAllEvents } = this.props

      getAllEvents()
    },
    componentWillReceiveProps({ hasEnded, getAllEvents }) {
      const { hasEnded: oldFlag } = this.props

      oldFlag !== hasEnded && getAllEvents()
    }
  })
)(EventsPage)