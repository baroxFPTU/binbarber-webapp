import React from 'react'
import { classNames } from 'utils'
import CSSModule from './GridWrapper.module.scss'

function GridWrapper({ col, gap, children, className }) {
  return (
    <div
      className={classNames(CSSModule.GridWrapper, className) }
      style={{ gridTemplateColumns: `repeat(${col}, 1fr)`, gap: `${gap}px` }}
    >
      {children}
    </div>
  )
}

export default GridWrapper