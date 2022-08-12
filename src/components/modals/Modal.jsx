import React from 'react'
import PropTypes from 'prop-types'

export const Modal = ({ isOpen, children }) => {
  return <>{isOpen && <div>{children}</div>}</>
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
