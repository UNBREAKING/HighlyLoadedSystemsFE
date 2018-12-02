import React from 'react'
import { Modal } from '../../common'
import LoginContent from './LoginContent'

const LoginModal = ({ hideLoginModal }) => 
  <Modal header="Вход на сайт" onClose={ hideLoginModal }>
    <LoginContent />
  </Modal>

export default LoginModal