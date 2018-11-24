import React from 'react'
import { Modal } from '../../common'

const LoginModal = ({ hideLoginModal }) => 
  <Modal header="Вход на сайт" onClose={ hideLoginModal }>
    <div>
      работает
    </div>
  </Modal>

export default LoginModal