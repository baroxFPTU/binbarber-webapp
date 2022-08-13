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
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import InputField from 'components/common/FormFields/InputField'
import Button from 'components/common/Button'

const initialValues = {
  name: '',
  phone: ''
}

const yupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Mr.Bin cần biết tên bạn để tiện xưng hô.')
    .min(2, 'Tên cần dài ít nhất 2 kí tự')
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Tên không hợp lệ'),
  phone: Yup.string()
    .matches(/([+84|84|0]+[3|5|7|8|9|1[2|6|8|9])+([0-9]{8})/, 'Số điện thoại không hợp lệ')
    .max(12, 'Số điện thoại không hợp lệ')
    .required('Có số điện thoại mới dễ liên hệ chứ nhỉ?')
})

const ModalForm = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onBlur', defaultValues: initialValues, resolver: yupResolver(yupSchema) })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay onClick={onClose} />
      <ModalContent center onClick={onClose}>
        <ModalHeader onClose={onClose}>Thông tin cơ bản</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              name='name'
              label='Tên của bạn'
              type='text'
              register={register}
              unregister={unregister}
              error={errors['name']}
            />
            <InputField
              name='phone'
              label='Số điện thoại'
              type='text'
              register={register}
              unregister={unregister}
              error={errors['phone']}
            />
            <button type='submit' />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant='primary' type='submit' onClick={handleSubmit(onSubmit)}>
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
