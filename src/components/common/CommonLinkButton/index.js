import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../constants'

const CommonLinkButton = ({ children, to }) =>
  <Wrapper to={ to }>
    { children }
  </Wrapper>

export default CommonLinkButton

const Wrapper = styled(Link)`
  display: inline-block;
  color: ${COLORS.black};
  background: ${COLORS.orange};
  font-size: 20px;
  padding: 10px 20px;
  text-decoration:none;
  cursor: pointer;
  transition: 0.3s background ease;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  &:hover{
    background: ${COLORS.lightblue};
    color: ${COLORS.black};
    text-decoration:none;
  }
`