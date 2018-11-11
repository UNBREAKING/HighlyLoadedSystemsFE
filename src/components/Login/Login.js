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
  width: 100%;
  padding: 20px;
`

const LoginButton = styled(Button)`
  ${props => props.isOpen && css`
    background: ${COLORS.lightblue};
  `}
`