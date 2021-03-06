import React, { Fragment } from 'react'
import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { Event } from '../common'
import { BUSINESS_CLIENT } from '../../constants'
import CommonAddButton from './CommonAddButton'


const Events = ({ hideEvents = false, events = [] }) => 
  <Fragment>
    {
      events.map( ({ name, _links }) => <Event name={ name } links={ _links } withUpdateLink /> )
    }
    {
      !hideEvents && <CommonAddButton to={ '/user-profile/add-event' } />
    }
  </Fragment>

const mapStateToProps = ({ 
  profiles: {
    currentUserProfile: {
      role,
      events
    } = {}
  } = {}
}) => ({ role, events })

export default compose(
  connect(mapStateToProps),
  withProps(({
    role
  }) => ({
    hideEvents: role !== BUSINESS_CLIENT 
  })),
)(Events)