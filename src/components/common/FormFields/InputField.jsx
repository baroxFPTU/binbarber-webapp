import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import { FormErrorText, FormLabel, FormGroup } from 'components/form'
import { useEffect } from 'react'

const InputField = ({ name, label, register, unregister, error, ...inputProps }) => {
  useEffect(() => {
    return () => {
      unregister(name)
    }
  }, [name, unregister])

  return (
    <FormGroup isInValid={Boolean(error)}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} {...register(name)} {...inputProps} />
      {error && <FormErrorText>{error.message}</FormErrorText>}
    </FormGroup>
  )
}

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
}

export default InputField
