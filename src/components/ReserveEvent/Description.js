import React, { Fragment } from 'react'


const Description = ({ description }) =>
  <Fragment>
    <h2>
      Описание события
    </h2>
    <div>
      { description }
    </div>
  </Fragment>

export default Description