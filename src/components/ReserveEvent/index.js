import { compose, lifecycle, withProps } from 'recompose'
import { connect } from 'react-redux'
import { getEvent, clearEventPage, getCurrentEvent, reserveEvent } from './actions'
import ReserveEvent from './ReserveEvent'

const mapStateToProps = ({
  eventReserve: {
    typesOfTables = [],
    dateTimeStart,
    event: {
      name: eventName
    } = {},
    place: {
      name: placeName,
      address
    } = {}
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
   dateTimeStart,
   eventName,
   placeName,
   address
 })

export default compose(
  connect(mapStateToProps, { getCurrentEvent, getEvent, clearEventPage, reserveEvent }),
  withProps(({ dateTimeStart }) => {
    const date = new Date(dateTimeStart)

    return {
      userDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      time: `${date.getHours()}.${date.getMinutes()}`
    }
  }),
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
      } = this.props;

      (hours !== oldHours || minutes !== oldMinutes || oldDate !== date) &&
        getCurrentEvent(id)
    }
  })
)(ReserveEvent)