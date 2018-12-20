import React, { Fragment } from 'react'
import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { Event } from '../common'
import { BUSINESS_CLIENT } from '../../constants'
import CommonAddButton from './CommonAddButton'


const Events = ({ href = '/', hideEvents = false }) => 
  <Fragment>
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    {
      !hideEvents && <CommonAddButton to={ href } />
    }
  </Fragment>

const mapStateToProps = ({ 
  profiles: {
    currentUserProfile: {
      role,
      _links: {
        linkToAddEvent: { 
          href = '/'
        } = {}
      } = {} 
    } = {} 
  } = {}
}) => ({ href, role })

export default compose(
  connect(mapStateToProps),
  withProps(({
    role
  }) => ({
    hideEvents: role !== BUSINESS_CLIENT 
  })),
)(Events)