import React from 'react'
import styled from 'styled-components'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { Input, Button, Checkbox } from '../../common'
import { hideLoginAndOpenRegisterModal } from '../actions'
import { LOGIN_FORM, COLORS } from '../../../constants'

const LoginContent = ({ hideLoginAndOpenRegisterModal }) =>
  <form>
    <Inputs>
      <Input label="почта/логин" fullWidth name="loginOrMail" />
      <Input label="пароль" fullWidth name="password" />
    </Inputs>
    <ButtonsAndLinks>
      <Button>Войти</Button>
      <CheckBoxAndLink>
        <Checkbox label="Запомнить" name="remember"/>
        <ForgotPassword to="/home">
          Забыли пароль ?
        </ForgotPassword>
      </CheckBoxAndLink>
    </ButtonsAndLinks>
    <RegisterWrapper>
      <RegisterButton onClick={ hideLoginAndOpenRegisterModal }>
        Зарегистрироваться с помощью эл.почты
      </RegisterButton>
    </RegisterWrapper>
  </form>

export default compose(
  reduxForm({
    form: LOGIN_FORM
  }),
  connect(null, { hideLoginAndOpenRegisterModal })
)(LoginContent)

const Inputs = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ButtonsAndLinks = styled.div`
  padding: 20px 0;
  text-align: center;
`

const CheckBoxAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
`

const ForgotPassword = styled(Link)`
`

const RegisterWrapper = styled.div`
  border-top: 1px solid ${COLORS.black};
  display: flex;
  justify-content: center;
`

const RegisterButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  color: ${COLORS.linkblue};

  &:hover {
    text-decoration: underline;
  }
`