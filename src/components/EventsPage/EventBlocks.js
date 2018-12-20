import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import EventBlock from './EventBlock'

const EventBlocks = ({ events }) => 
  <Fragment>
    {
      events.map(({ event: { name, links } }, index) =>
        <EventBlock name={ name } links={ links } key={ index } />
      )
    }
  </Fragment>

const mapStateToProps = ({
  allEvents: {
    events
  }
}) => ({ events }) 

export default connect(mapStateToProps)(EventBlocks)
