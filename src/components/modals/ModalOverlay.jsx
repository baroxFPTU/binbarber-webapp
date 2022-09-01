import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  z-index: ${(props) => props.theme.base.zIndex.fresher};
`

export const ModalOverylayVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}

export const ModalOverlay = ({ ...props }) => {
  return (
    <ModalOverlayStyled
      variants={ModalOverylayVariants}
      initial='hidden'
      animate='show'
      exit='hidden'
      {...props}
    />
  )
}
