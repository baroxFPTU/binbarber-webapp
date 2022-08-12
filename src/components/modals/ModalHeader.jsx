import Button from 'components/common/Button'
import Error from 'components/common/Error/Error'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import CloseIcon from 'assets/Icons/Close.svg'
import styled from 'styled-components'
import { darken } from 'polished'

export const ModalHeader = ({ children, onClose }) => {
  return (
    <ErrorBoundary fallback={<Error>Không thể tải được Header</Error>}>
      <ModalHeaderStyled>
        <h3>{children}</h3>
        <Button className='ModalCloseButton' onClick={onClose}>
          <img src={CloseIcon} alt='' />
        </Button>
      </ModalHeaderStyled>
    </ErrorBoundary>
  )
}

const ModalHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  & h3 {
    margin: 0;
    padding: 0;
  }

  .ModalCloseButton {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    padding: 12px;
    margin: 0;

    transition: ${(props) => props.theme.transition.simple};
    &:hover {
      background: ${(props) => darken(0.1, props.theme.modal.bg)};
    }

    img {
      width: 20px;

      height: 20px;
      object-fit: cover;
    }
  }
`
