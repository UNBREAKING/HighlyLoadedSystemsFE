import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose' 
import { getAllPlaces } from './actions'
import PlacesPage from './PlacesPage'

const mapStateToProps = ({
  form: { 
    filtersPlaces: { 
      values: { 
        hasActiveEvents = false 
      } = {}
    } = {}
  } = {} 
}) => ({ hasActiveEvents })

export default compose(
  connect(mapStateToProps, { getAllPlaces }),
  lifecycle({
    componentDidMount() {
      const { getAllPlaces } = this.props

      getAllPlaces()
    },
    componentWillReceiveProps({ hasActiveEvents, getAllPlaces }) {
      const { hasActiveEvents: oldFlag } = this.props

      oldFlag !== hasActiveEvents && getAllPlaces()
    }
  })
)(PlacesPage)