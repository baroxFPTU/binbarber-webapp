import React from 'react'
import styled from 'styled-components'

const FormSectionStyled = styled.div`
  display: ${(props) => (props.horizontal || props.vertical ? 'flex' : '')};
  flex-direction: ${(props) => {
    if (props.horizontal) return 'row'
    if (props.vertical) return 'column'
  }};
  justify-content: ${(props) => props.horizontal && 'space-between'};
  align-items: ${(props) => props.horizontal && 'center'};
  padding: ${(props) => props.horizontal && '24px 0 0 0 '};
  & h3 {
    padding: ${(props) => props.horizontal && '0'};
  }
`

function FormSection({ title, children, ...props }) {
  return (
    <FormSectionStyled {...props}>
      {title && <h3>{title}</h3>}
      {children}
    </FormSectionStyled>
  )
}

export default FormSection
