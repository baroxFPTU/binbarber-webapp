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
  & > & {
    white-space: nowrap;
    width: 100%;
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
  children: <p>Lỗi gì đó, không tải được</p>
}

export default Error
