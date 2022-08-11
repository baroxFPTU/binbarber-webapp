import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import CSSModule from './Button.module.scss'

const primaryVariants = {
  hidden: {},
  show: {}
}

const fixedVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1
  },
  transition: {
    delay: 0,
    type: 'spring',
    duration: 0.6,
    bounce: 0.6,
    when: 'afterChildren'
  }
}

const Button = React.forwardRef(
  ({ variant, fixed, disabled, children, fullWidth, className, ...props }, ref) => {
    console.log(className)
    let buttonClassName = CSSModule.btn + ` ${className}`

    if (variant === 'primary') {
      buttonClassName += ' ' + CSSModule.btnPrimary
    }

    if (variant === 'outline') {
      buttonClassName += ' ' + CSSModule.btnOutline
    }

    if (fixed) {
      buttonClassName += ' ' + CSSModule.btnFixed
    }

    if (fullWidth) {
      buttonClassName += ' ' + CSSModule.btnFullWidth
    }

    const buttonVariants = fixed && fixedVariants

    return (
      <motion.button
        key='button-motion-sdsd'
        variants={buttonVariants}
        initial='hidden'
        animate='show'
        exit='hidden'
        className={buttonClassName}
        disabled={disabled}
        role='button'
        {...props}
        ref={ref}
      >
        {children}
      </motion.button>
    )
  }
)

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
