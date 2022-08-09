import Button from 'components/common/Button'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ServiceGridStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    flex-grow: 1;
  }
`

const ServiceGrid = ({ data }) => {
  return (
    <ServiceGridStyled>
      {data.map((item) => (
        <Button key={item.id} variant='outline' style={{ width: 'unset' }}>
          {item.name}
        </Button>
      ))}
    </ServiceGridStyled>
  )
}

ServiceGrid.propTypes = {
  data: PropTypes.array
}

ServiceGrid.defaultProps = {
  data: []
}

export default ServiceGrid
