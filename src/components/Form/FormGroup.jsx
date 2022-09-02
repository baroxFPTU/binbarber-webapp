import React from 'react'
import styled from 'styled-components'
const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  & > input {
    border-color: ${(props) => props.isInValid && props.theme.color.error};
  }
`

export const FormGroup = ({ isInValid, children }) => {
  return <FormGroupStyled isInValid={isInValid}>{children}</FormGroupStyled>
}
