import React from 'react'
import styled from 'styled-components'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Input, Button, RadioGroup } from '../../common'
import { hideRegisterModalAndOpenLoginModal, register } from '../actions'
import { REGISTER_FORM, COLORS } from '../../../constants'

const elements = [
  {
    value: "male",
    label: "Мужчина"
  },
  {
    value: "female",
    label: "Женщина"
  }
]

const RegisterContent = ({ hideRegisterModalAndOpenLoginModal, register }) =>
  <form>
    <Inputs>
      <Input label="имя" fullWidth name="name" />
      <Input label="фамилия" fullWidth name="surname" />
      <Input label="номер телефона" number fullWidth name="phonenumber" />
      <RadioGroup name="sex" elements={ elements } />
      <Input label="почта" fullWidth name="email" />
      <Input label="логин" fullWidth name="login" />
      <Input label="пароль" password fullWidth name="password" />
    </Inputs>
    <Buttons>
      <Button
        onClick={ () => register("GENERAL_CLIENT") }>
        Зарегистрироваться
      </Button>
      <SecondButton
        onClick={ () => register("BUSINESS_CLIENT") }>
        Зарегистрировать бизнес
      </SecondButton>
    </Buttons>
    <RegisterWrapper>
      <RegisterButton onClick={ hideRegisterModalAndOpenLoginModal }>
        Уже есть аккаунт? Войти
      </RegisterButton>
    </RegisterWrapper>
  </form>

export default compose(
  reduxForm({
    form: REGISTER_FORM
  }),
  connect(null, { hideRegisterModalAndOpenLoginModal, register })
)(RegisterContent)

const Inputs = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Buttons = styled.div`
  max-width: 400px;
  display: flex;
  margin: 20px auto;
  flex-direction: column;
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

const SecondButton = styled(Button)`
  margin-top: 10px;
`