import { show, hide } from 'redux-modal'
import { LOGIN_MODAL_NAME } from './constants'

export const openLoginModal = () => dispatch => dispatch(show(LOGIN_MODAL_NAME))

export const hideLoginModal = () => dispatch => dispatch(hide(LOGIN_MODAL_NAME))