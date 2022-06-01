import React from 'react'
import CSSModule from './ModalHeader.module.scss'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

function ModalHeader(props) {
  return (
    <div className={CSSModule.ModalHeader}>
      <div className={CSSModule.ModalHeaderContainer}>
        <button>
          <MdOutlineArrowBackIosNew/>
        </button>
        <h3>{props.title || 'Title'}</h3>
      </div>
    </div>
  )
}

export default ModalHeader