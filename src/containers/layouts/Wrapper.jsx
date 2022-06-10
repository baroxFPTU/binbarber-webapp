import React from 'react'
import { classNames } from 'utils/classNames'

function Wrapper(props) {
  return (
    <div className={classNames('app-wrapper', props.className || '')}>
      {props.children}
    </div>
  )
}

export default Wrapper