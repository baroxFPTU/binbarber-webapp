import React from 'react'
import styled from 'styled-components'
const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  input {
    margin-bottom: 18px;
  }
`

function FormGroup({ name, label, children }) {
  return (
    <FormGroupStyled>
      {label && <label htmlFor={name}>{label}</label>}
      {children}
    </FormGroupStyled>
  )
}

export default FormGroup
