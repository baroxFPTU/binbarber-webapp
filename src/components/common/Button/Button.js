import React from 'react'
import PropTypes from 'prop-types'
import CSSModule from './Button.module.scss'

const Button = ({ variant, fixed, disabled, children, ...props }) => {
  let buttonClassName = CSSModule.btn

  if (variant === 'primary') {
    buttonClassName += ' ' + CSSModule.btnPrimary
  }

  if (fixed) {
    buttonClassName += ' ' + CSSModule.btnFixed
  }

  return (
    <button className={buttonClassName} disabled={disabled} role='button' {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  variant: 'default',
  fixed: false,
  disabled: false
}

export default Button
