import React from 'react'

function FeaturedSection({ label, children, ...props }) {
  return (
    <div {...props}>
      {label && <h2>{label}</h2>}
      {children}
    </div>
  )
}

export default FeaturedSection
