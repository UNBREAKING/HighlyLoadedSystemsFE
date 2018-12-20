import React, { Fragment } from 'react'
import { Place } from '..'

const Places = ({ places = [], withUpdateLink = false }) => 
  <Fragment>
    { 
      places.map(({ name, address, id }) => 
        <Place
          name={ name }
          key={ id }
          address={ address }
          placeId={ id }
          withUpdateLink={ withUpdateLink } /> 
      )
    }
  </Fragment>

export default Places