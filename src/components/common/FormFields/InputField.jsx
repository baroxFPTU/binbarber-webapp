import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from 'components/Form/FormGroup'
import Input from '../Input'

const InputField = ({ name, label, ...inputProps }) => {
  return (
    <FormGroup id={name} name={name} label={label}>
      <Input id={name} name={name} {...inputProps} />
    </FormGroup>
  )
}

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
}

export default InputField
