import React, { Fragment } from 'react'
import { Place } from '../common'
import CommonAddButton from './CommonAddButton'

const Places = () => 
  <Fragment>
    <Place withUpdateLink />
    <Place withUpdateLink />
    <Place withUpdateLink />
    <Place withUpdateLink />
    <Place withUpdateLink />
    <Place withUpdateLink />
    <Place withUpdateLink />
    <CommonAddButton />
  </Fragment>

export default Places