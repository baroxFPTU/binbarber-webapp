import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormLabelStyled = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const FormLabel = ({ children, ...labelProps }) => {
  if (!children) return
  return <FormLabelStyled {...labelProps}>{children}</FormLabelStyled>
}

FormLabel.propTypes = {
  children: PropTypes.node
}

FormLabel.defaultProps = { children: null }
