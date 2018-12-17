import React, { Fragment } from 'react'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { Button } from '../common'

const Login = ({ openLoginModal, isUserSignedIn }) =>
  <Wrapper>
    {
      isUserSignedIn ?
        <Fragment>
          <Button>
            Выйти из профиля
          </Button>
          <Icon fontSize="large">
            person
          </Icon>
        </Fragment> :
        <Button onClick={ openLoginModal } >
          Вход/Регистрация
        </Button>
    }
  </Wrapper>

export default Login

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
`
