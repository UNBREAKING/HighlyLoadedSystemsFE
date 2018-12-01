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
  border: 1px solid ${COLORS.black};

  &:hover{
    background: ${COLORS.lightblue};
    color: ${COLORS.black};
    text-decoration:none;
  }
`