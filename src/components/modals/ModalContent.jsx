import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalContentStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.base.zIndex.junior};

  display: flex;
  justify-content: center;
  align-items: ${(props) => {
    if (props.top) return 'baseline'
    else if (props.bottom) return 'end'
    return 'center'
  }};
  padding: 0 calc(2 * ${(props) => props.theme.base.spacing});

  width: 100vw;
  height: 100vh;

  overflow: auto;
  cursor: pointer;

  .ModalContent {
    background: #fff;

    width: 100%;
    max-width: 600px;

    margin: calc(3.5 * 2 * ${(props) => props.theme.base.spacing}) 0;
    padding: 24px;
    border-radius: 8px;

    cursor: default;
    z-index: ${(props) => props.theme.base.zIndex.master};
  }
`

export const ModalContent = ({ children, ...containerProps }) => {
  const handleOnClick = (e) => {
    e.stopPropagation()
  }

  return (
    <ModalContentStyled {...containerProps}>
      <section className='ModalContent' onClick={handleOnClick}>
        {children}
      </section>
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
