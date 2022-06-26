import React from 'react'

function FormSection(props) {
  return (
    <div className="form-section">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}

export default FormSection