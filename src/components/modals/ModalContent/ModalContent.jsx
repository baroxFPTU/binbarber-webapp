import React from 'react'
import CSSModule from './ModalContent.module.scss'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalContentStyled = styled.section`
  align-items: ${(props) => {
    if (props.top) return 'baseline'
    else if (props.bottom) return 'end'
    return 'center'
  }};
`

export const ModalContent = ({ children, ...containerProps }) => {
  return (
    <ModalContentStyled className={CSSModule.ModalContentContainer} {...containerProps}>
      <div className={CSSModule.ModalContent}>{children}</div>
    </ModalContentStyled>
  )
}

ModalContent.prototypes = {
  top: PropTypes.boolean,
  center: PropTypes.boolean,
  bottom: PropTypes.boolean
}

ModalContent.defaultProps = {
  top: false,
  center: false,
  bottom: false
}
