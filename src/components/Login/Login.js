import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../common'
import { COLORS } from '../../constants'

const Login = ({ isLoginOpen, toggleLogin }) =>
  <Wrapper>
    <LoginButton onClick={toggleLogin} isOpen={isLoginOpen}>
      Вход/Регистрация
    </LoginButton>
  </Wrapper>

export default Login

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 20px;
`

const LoginButton = styled(Button)`
  cursor: pointer;
  ${props => props.isOpen && css`
    background: ${COLORS.lightblue};
  `}
`