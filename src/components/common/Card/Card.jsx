import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  position: relative;
  .card-wrapper {
    border-radius: 10px;
    overflow: hidden;
  }
`

function Card(props) {
  return (
    <CardStyled {...props}>
      <div className="card-wrapper">
        {props.children}
      </div>
    </CardStyled>
  )
}

export default Card