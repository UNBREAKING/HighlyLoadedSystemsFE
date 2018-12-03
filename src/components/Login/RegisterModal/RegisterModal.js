import React from 'react'
import { Modal } from '../../common'
import RegisterContent from './RegisterContent'

const RegisterModal = ({ hideRegisterModalAndOpenLoginModal }) => 
  <Modal header="Регистрация" onClose={ hideRegisterModalAndOpenLoginModal }>
    <RegisterContent />
  </Modal>

export default RegisterModal