import React from 'react'
import styled from 'styled-components'

const FormErrorTextStyled = styled.div`
  color: ${(props) => props.theme.color.error};
  margin-top: 8px;
  font-size: 15px;
`

export const FormErrorText = ({ children }) => {
  return <FormErrorTextStyled>{children}</FormErrorTextStyled>
}
