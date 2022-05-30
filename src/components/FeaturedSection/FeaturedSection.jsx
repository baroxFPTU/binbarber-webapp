import React from 'react'
import CSSModule from './FeaturedSection.module.scss'

function FeaturedSection({ label, children }) {
  return (
    <div className={CSSModule.FeaturedSection}>
      <h2>{label}</h2>
      {children}
    </div>
  )
}

export default FeaturedSection