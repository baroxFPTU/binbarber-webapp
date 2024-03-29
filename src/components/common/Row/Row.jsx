import React from 'react'
import styled from 'styled-components'

const RowStyled = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: ${(props) => (props.spaceBetween ? 'space-between' : 'flex-start')};
  column-gap: 12px;
  align-items: center;
`

function Row(props) {
  return <RowStyled {...props}>{props.children}</RowStyled>
}

export default Row
