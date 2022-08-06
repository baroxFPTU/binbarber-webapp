import React from 'react'
import styled from 'styled-components'

const DividerStyled = styled.hr`
  display: inline-block;
  width: 100%;
  border: 1px solid #f5f5f5;
  margin-top: 12px;
  margin-bottom: 12px;
`

const Divider = (props) => {
  return <DividerStyled {...props} />
}

export default Divider
