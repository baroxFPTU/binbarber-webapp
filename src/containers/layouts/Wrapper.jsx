import React from 'react'

function Wrapper(props) {
  return (
    <div className="app-wrapper">
      {props.children}
    </div>
  )
}

export default Wrapper