import { show, hide } from 'redux-modal'
import { createAction } from 'redux-actions'
import { LOGIN_MODAL_NAME, REGISTER_MODAL } from './constants'
import { push } from 'connected-react-router'
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

export const userIsSignedIn = createAction('LOGIN/SIGN_IN')
export const checkIfUserIsSignedIn = createAction('LOGIN/CHECK_ON_SIGN_IN')
export const removeSiginIn = createAction('LOGIN/SIGN_OUT')

export const signout = () => dispatch => {
  const { signOut } = endpoints

  signOut().then(({ status, url }) => { 
    if (status === 'success') {
      dispatch(removeSiginIn())
      dispatch(push(url))
    }
  })
  .catch(error => {
    const response = error.response && error.response.data

    if (response.error === 'Forbidden') {
      dispatch(removeSiginIn())
      dispatch(push('/home'))
    }
  })
}

export const signin = () => (dispatch, getState) => {
  const { signIn } = endpoints

  const { 
    form: {
      login: {
        values: {
          loginOrMail,
          password
        } = {}
      } = {}
    } = {}
  } = getState()

  signIn({ login: loginOrMail, password }).then(({ status, url }) => {
    if (status === 'success') {
      dispatch(hideLoginModal())
      dispatch(userIsSignedIn())
      dispatch(push('/user-profile'))
    }
  })
}

export const register = (roleName = "GENERAL_CLIENT") => (dispatch, getState) => {
  const { register } = endpoints

  const {
    form: {
      register: {
        values: {
          name,
          surname,
          phonenumber,
          sex,
          email,
          password,
          login
        }
      } = {}
    } = {}
  } = getState()

  register({ 
    email,
    login,
    name,
    password,
    phonenumber,
    roleName,
    sex,
    surname
  })
  .then(({ status, url }) => {
    if (status === 'success') {
      dispatch(hideRegisterModal())
      dispatch(userIsSignedIn())
      dispatch(push('/user-profile'))
    }
  })
}