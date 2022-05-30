import React from 'react'
import CSSModule from './GridWrapper.module.scss'

function GridWrapper({ col, gap, children }) {
  return (
    <div className={CSSModule.GridWrapper} style={{gridTemplateColumns: `repeat(${col}, 1fr)`, gap: `${gap}px`}}>
      {children}
    </div>
  )
}

export default GridWrapper