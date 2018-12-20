import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PlaceBlock from './PlaceBlock'

const PlaceBlocks = ({ places = [] }) => 
  <Fragment>
    {
      places.map(({ shortDescription, name, address, time, links }, index) => 
        <PlaceBlock
          key={ index }
          shortDescription={ shortDescription } 
          name={ name }
          links={ links } 
          address={ address } 
          time={ time } />
      )
    }
  </Fragment>

const mapStateToProps = ({ allPlaces: { places } }) => ({ places })

export default connect(mapStateToProps)(PlaceBlocks)
