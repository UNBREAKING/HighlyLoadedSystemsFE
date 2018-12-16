import React, { Fragment } from 'react'
import { reduxForm } from 'redux-form'
import { Checkbox } from '../common'
import { PLACES_FILTERS } from '../../constants'

const Filters = () =>
  <Fragment>
    <Checkbox label="С событиями" name="hasActiveEvents"/>
  </Fragment>

export default reduxForm({
  form: PLACES_FILTERS
})(Filters)