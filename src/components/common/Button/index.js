import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../constants'

const Button = ({ children, className, onClick }) =>
  <Wrapper className={className} onClick={onClick}>
    {children}
  </Wrapper>

export default Button

const Wrapper = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 3px;
  border: 1px solid black;
  background: ${COLORS.orange};
`