import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  ModalFooter
} from 'components/modals'
import InputField from 'components/common/FormFields/InputField'
import Button from 'components/common/Button'

const ModalForm = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay onClick={onClose} />
      <ModalContent center onClick={onClose}>
        <ModalHeader onClose={onClose}>Thông tin cơ bản</ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <InputField id='name' name='name' label='Tên của bạn' type='text' />
            <InputField id='phone' name='phone' label='Số điện thoại' type='number' />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant='primary' type='submit' onClick={onSubmit}>
            Hoàn tất
          </Button>
          <Button onClick={onClose}>Hủy</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

ModalForm.prototypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

ModalForm.defaultProps = {
  isOpen: false
}

export default ModalForm
