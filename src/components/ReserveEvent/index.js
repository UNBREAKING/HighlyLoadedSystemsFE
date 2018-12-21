import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getEvent, clearEventPage, getCurrentEvent, reserveEvent } from './actions'
import ReserveEvent from './ReserveEvent'

const mapStateToProps = ({
  eventReserve: {
    typesOfTables = []
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
   typesOfTables
 })

export default compose(
  connect(mapStateToProps, { getCurrentEvent, getEvent, clearEventPage, reserveEvent }),
  lifecycle({
    componentDidMount() {
      const {
        getEvent,
        match: {
          params: {
            id
          } = {}
        } = {}
      } = this.props

      getEvent(id)
    },
    componentWillUnmount() {
      const { clearEventPage } = this.props 

      clearEventPage()
    },
    componentWillReceiveProps({ hours, minutes, date }) {
      const { 
        getCurrentEvent,
        hours: oldHours, 
        minutes: oldMinutes, 
        date: oldDate,
        match: {
          params: {
            id
          } = {}
        } = {}
      } = this.props

      !(!oldHours && !oldMinutes && !oldDate) &&
        ( hours !== oldHours || minutes !== oldMinutes || oldDate !== date ) &&
        getCurrentEvent(id)
    }
  })
)(ReserveEvent)