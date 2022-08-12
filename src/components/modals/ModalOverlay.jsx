import React from 'react'
import styled from 'styled-components'

const ModalOverlayStyled = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  z-index: ${(props) => props.theme.base.zIndex.fresher};
`

export const ModalOverlay = ({ ...props }) => {
  return <ModalOverlayStyled {...props} />
}
