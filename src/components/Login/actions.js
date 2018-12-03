import { show, hide } from 'redux-modal'
import { LOGIN_MODAL_NAME, REGISTER_MODAL } from './constants'

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