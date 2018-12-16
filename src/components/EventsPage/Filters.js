import React, { Fragment } from 'react'
import { reduxForm } from 'redux-form'
import { Checkbox } from '../common'
import { EVENTS_FILTERS } from '../../constants'


const Filters = () =>
  <Fragment>
    <Checkbox label="Только активные" name="hasEnded"/>
  </Fragment>

export default reduxForm({
  form: EVENTS_FILTERS
})(Filters)