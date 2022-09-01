import React from 'react'
import styled from 'styled-components'

const FluidSkeletonStyled = styled.div`
  width: 100%;
  height: 500px;
  background: ${(props) => props.theme.color.gray[300]};
`

function FluidSkeleton() {
  return <FluidSkeletonStyled />
}

export default FluidSkeleton
