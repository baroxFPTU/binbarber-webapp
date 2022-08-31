import PropTypes from 'prop-types'

import Grid from 'components/common/Grid'
import React from 'react'
import styled from 'styled-components'
import FluidSkeleton from './FluidSkeleton'

const TimeOptionSkeleton = styled.div`
  width: 111.11px;
  height: 42px;
  overflow: hidden;
  border-radius: 8px;
  & > div {
    background: #e9e9e9dd;
  }
`

const TimeSelectSkeleton = ({ instanceOptions = 9 }) => {
  const repeatTimes = [...Array(instanceOptions).keys()]

  return (
    <Grid col={3} row={3} gap={18}>
      {repeatTimes.map((index) => (
        <TimeOptionSkeleton key={index}>
          <FluidSkeleton />
        </TimeOptionSkeleton>
      ))}
    </Grid>
  )
}

TimeOptionSkeleton.propTypes = {
  instanceOptions: PropTypes.number
}

TimeOptionSkeleton.defaultProps = {
  instanceOptions: 9
}

export default TimeSelectSkeleton
