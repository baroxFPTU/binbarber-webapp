import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`

const Input = React.forwardRef(({ ...inputProps }, ref) => {
  return <InputStyled {...inputProps} ref={ref} />
})

export default Input
