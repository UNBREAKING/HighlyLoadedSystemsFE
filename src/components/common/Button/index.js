import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../constants'

const Button = ({ children, className, onClick, type, disabled = false }) =>
  <Wrapper className={className} onClick={onClick} disabled={ disabled } type={ type || "button" }>
    {children}
  </Wrapper>

export default Button

const Wrapper = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  border:none;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  background: ${COLORS.orange};
  transition: 0.3s background ease;

  &:hover {
    background: ${COLORS.lightblue}
  }
`