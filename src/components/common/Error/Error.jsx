import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ErrorIcon } from 'components/Icon'

const ErrorStyled = styled.div`
  font-weight: 500;
  color: #c20618;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  & svg {
    width: 30px;
    height: 30px;
  }
`

const Error = ({ children }) => {
  return (
    <ErrorStyled>
      <ErrorIcon />
      {children}
    </ErrorStyled>
  )
}

Error.propTypes = {
  children: PropTypes.node
}

Error.defaultProps = {
  children: <p>Something went wrong</p>
}

export default Error
