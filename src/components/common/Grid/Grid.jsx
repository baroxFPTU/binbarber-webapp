import React from 'react'
import { classNames } from 'utils'
import PropTypes from 'prop-types'
import CSSModule from './Grid.module.scss'

function Grid({ col, row, gap, children, className, variant }) {
  return (
    <div
      className={classNames(CSSModule.Grid, className)}
      style={{
        gridTemplateColumns: col ? `  repeat(${col}, minmax(0, 1fr))` : 'auto',
        gridTemplateRows: row ? `repeat(${row},minmax(0, 1fr))` : 'auto',
        gap: `${gap}px`
      }}
      variant={variant}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  col: PropTypes.number,
  gap: PropTypes.number,
  row: PropTypes.number,
  variant: PropTypes.string
}

Grid.defaultProps = {
  col: null,
  gap: 12,
  row: null,
  variant: 'wrap'
}

export default Grid
