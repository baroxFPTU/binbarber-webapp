import Button from 'components/common/Button'
import Error from 'components/common/Error/Error'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import CSSModule from './ModalHeader.module.scss'
import CloseIcon from 'assets/Icons/Close.svg'

export const ModalHeader = ({ children }) => {
  return (
    <ErrorBoundary fallback={<Error>Không thể tải được Header</Error>}>
      <div className={CSSModule.ModalHeader}>
        <h3>{children}</h3>
        <Button className={CSSModule.ModalCloseButton}>
          <img src={CloseIcon} alt='' />
        </Button>
      </div>
    </ErrorBoundary>
  )
}
