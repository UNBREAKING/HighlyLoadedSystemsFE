import React, { Fragment } from 'react'
import { Event } from '../common'

const Events = ({ events = [] }) => 
  <Fragment>
    {
      events.map(({ name, isEnded, _links }, index) => 
        <Event 
          key={ index }
          name={ name }
          links={ _links }
          available={ isEnded } />
      )
    }
  </Fragment>

export default Events