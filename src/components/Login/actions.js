import { show, hide } from 'redux-modal'
import { LOGIN_MODAL_NAME, REGISTER_MODAL } from './constants'
import endpoints from '../../endpoints'

export const openLoginModal = () => dispatch => dispatch(show(LOGIN_MODAL_NAME))

export const hideLoginModal = () => dispatch => dispatch(hide(LOGIN_MODAL_NAME))

export const openRegisterModal = () => dispatch => dispatch(show(REGISTER_MODAL))

export const hideRegisterModal = () => dispatch => dispatch(hide(REGISTER_MODAL))

export const hideLoginAndOpenRegisterModal = () => dispatch => {
  dispatch(hideLoginModal())
  dispatch(openRegisterModal())
}

export const hideRegisterModalAndOpenLoginModal = () => dispatch => {
  dispatch(hideRegisterModal())
  dispatch(openLoginModal())
}

export const register = () => dispatch => {
  const { register } = endpoints

  register({ 
    email: "aaa",
    login: "sss",
    name: "sadss",
    password: "oooo",
    phonenumber: "312",
    roleName: "GENERAL_CLIENT",
    sex: "make",
    surname: "asdasdsds"
  })
}