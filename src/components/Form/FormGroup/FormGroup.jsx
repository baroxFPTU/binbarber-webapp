import React from 'react'
import styled from 'styled-components'
const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 15px;
    margin-bottom: 8px;
  }
  input {
    margin-bottom: 18px;
  }
`

function FormGroup(props) {
  return (
    <FormGroupStyled>
      {props.children}
    </FormGroupStyled>
  )
}

export default FormGroup