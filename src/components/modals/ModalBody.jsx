import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalBodyStyled = styled.div`
  max-height: 90vh;
  overflow-y: auto;
`

export const ModalBody = ({ children }) => {
  return <ModalBodyStyled>{children}</ModalBodyStyled>
}

ModalBody.propTypes = {
  children: PropTypes.node
}
