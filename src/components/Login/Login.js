import React, { Fragment } from 'react'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { Button, CommonLinkButton } from '../common'

const Login = ({ openLoginModal, isUserSignedIn, signout }) =>
  <Wrapper>
    {
      isUserSignedIn ?
        <Fragment>
          <Button onClick={ signout }>
            Выйти из профиля
          </Button>
          <Profile to='/profile'>
            <Icon fontSize="small">
              person
            </Icon>
            Профиль
          </Profile>
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

const Profile = styled(CommonLinkButton)`
  margin-left: 20px;
  display: flex;
  align-items: center;
`