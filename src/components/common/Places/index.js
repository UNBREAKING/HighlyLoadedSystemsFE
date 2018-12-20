import React, { Fragment } from 'react'
import { Place } from '..'

const Places = ({ places = [], withUpdateLink = false, onItemClick, selectedId = null }) => 
  <Fragment>
    { 
      places.map(({ name, address, id, _links }) => 
        <Place
          name={ name }
          key={ id }
          links={ _links }
          address={ address }
          selected={ selectedId === id }
          placeId={ id }
          onClick= { () => onItemClick(id) }
          withUpdateLink={ withUpdateLink } /> 
      )
    }
  </Fragment>

export default Places