import React, { Fragment } from 'react'
import { Event } from '../common'
import CommonAddButton from './CommonAddButton'

const Events = () => 
  <Fragment>
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <Event withUpdateLink />
    <CommonAddButton />
  </Fragment>

export default Events