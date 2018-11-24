import React from 'react'
import styled from 'styled-components'
import { Button } from '../common'

const Login = ({ openLoginModal }) =>
  <Wrapper>
    <Button onClick={ openLoginModal } >
      Вход/Регистрация
    </Button>
  </Wrapper>

export default Login

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
`
