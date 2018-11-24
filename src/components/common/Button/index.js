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
  cursor: pointer;
  border: 1px solid ${COLORS.black};
  background: ${COLORS.orange};
  transition: 0.3s background ease;

  &:hover {
    background: ${COLORS.lightblue}
  }
`