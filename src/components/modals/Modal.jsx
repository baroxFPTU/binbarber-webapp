import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

export const Modal = ({ isOpen, children }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isOpen && <motion.div>{children}</motion.div>}
      </AnimatePresence>
    </>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

Modal.defaultProps = {
  isOpen: false,
  onClose: null,
  children: null
}
