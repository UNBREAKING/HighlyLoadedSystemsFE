import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Event } from '../common'
import CommonAddButton from './CommonAddButton'


const Events = ({ href = '/' }) => 
  <Fragment>
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <CommonAddButton to={ href } />
  </Fragment>

const mapStateToProps = ({ 
  profiles: {
    currentUserProfile: { 
      _links: {
        linkToAddEvent: { 
          href = '/'
        } = {}
      } = {} 
    } = {} 
  } = {}
}) => ({ href })

export default connect(mapStateToProps)(Events)