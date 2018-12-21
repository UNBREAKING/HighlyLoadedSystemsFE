import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { 
  getPlaceReserve, 
  clearPlaceReservePage, 
  getCurrentPlaceReserve, 
  reservePlace 
} from './actions'
import ReservePlace from './ReservePlace'

const mapStateToProps = ({
  placeReserve: {
    typesOfTables = [],
    placeName
  } = {},
  form: {
    reserveTime: {
      values: {
        hoursStart: hours,
        minutesStart: minutes,
        date,
      } = {}
    } = {}
  } = {}
 }) => ({
   hours,
   minutes,
   date,
   typesOfTables,
   placeName,
 })

 const mapDispatchToProps = {
  getPlaceReserve, 
  clearPlaceReservePage, 
  getCurrentPlaceReserve, 
  reservePlace 
 }

 export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const {
        getPlaceReserve,
        match: {
          params: {
            id
          } = {}
        } = {}
      } = this.props

      getPlaceReserve(id)
    },
    componentWillUnmount() {
      const { clearPlaceReservePage } = this.props 

      clearPlaceReservePage()
    },
    componentWillReceiveProps({ hours, minutes, date }) {
      const { 
        getCurrentPlaceReserve,
        hours: oldHours, 
        minutes: oldMinutes, 
        date: oldDate,
        match: {
          params: {
            id
          } = {}
        } = {}
      } = this.props;

      !(!oldHours && !oldMinutes && !oldDate ) &&
        (hours !== oldHours || minutes !== oldMinutes || oldDate !== date) &&
        getCurrentPlaceReserve(id)
    }
  })
)(ReservePlace)
