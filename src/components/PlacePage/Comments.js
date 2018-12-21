import React from 'react'
import Comment from './Comment'

const Comments = ({ comments, placeId }) => 
  comments.map((item, index) => <Comment placeId={ placeId } key={index} {...item} />)

export default Comments