import { compose, lifecycle, withProps } from 'recompose'
import { connect } from 'react-redux'
import { getPlace } from './actions'
import PlacePage from './PlacePage'

const mapStateToProps = ({ placesInfo: { places } = {} }) => ({ places })

export default compose(
  connect(mapStateToProps, { getPlace }),
  withProps(({
    places,
    match: {
      params: {
        id
      } = {}
    }
  }) => ({
    place: places[id] || {}
  })),
  lifecycle({
    componentDidMount() {
      const { 
        getPlace,
        match: {
          params: {
            id
          } = {}
        } = {}
      } = this.props
      
      getPlace(id)
    }
  })
)(PlacePage)