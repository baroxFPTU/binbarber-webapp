import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalFooterStyled = styled.div`
  margin-top: calc(${(props) => props.theme.base.spacing} * 2);
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: center;
`

export const ModalFooter = ({ justifyContent, children }) => {
  return <ModalFooterStyled justifyContent={justifyContent}>{children}</ModalFooterStyled>
}

ModalFooter.prototypes = {
  justifyContent: PropTypes.string
}

ModalFooter.defaultProps = {
  justifyContent: 'center'
}
