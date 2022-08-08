import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CardStyled = styled(motion.div)`
  position: relative;
  .card-wrapper {
    border-radius: 10px;
    overflow: hidden;
  }
`

const cardVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}

function Card(props) {
  return (
    <CardStyled variants={cardVariants} {...props}>
      <div className='card-wrapper'>{props.children}</div>
    </CardStyled>
  )
}

export default Card
