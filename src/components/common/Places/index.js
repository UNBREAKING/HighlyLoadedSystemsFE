import React, { Fragment } from 'react'
import { Place } from '..'

const Places = ({ places = [], withUpdateLink = false, onItemClick }) => 
  <Fragment>
    { 
      places.map(({ name, address, id }) => 
        <Place
          name={ name }
          key={ id }
          address={ address }
          placeId={ id }
          onClick= { () => onItemClick(id) }
          withUpdateLink={ withUpdateLink } /> 
      )
    }
  </Fragment>

export default Places