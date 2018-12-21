import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Description = ({ description }) =>
  <Fragment>
    <h2>
      Описание события
    </h2>
    <div>
      { description }
    </div>
  </Fragment>

const mapStateToProps = ({
  eventReserve: {
    description
  } = {}
}) => ({ description })

export default connect(mapStateToProps)(Description)