import Header from 'components/common/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../common/Wrapper'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'components/common/Error/Error'
import { useTitle } from 'hooks/useTitle'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

function BookingLayout(props) {
  const { title } = useTitle()

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{
        duration: 0.4
      }}
      className='app-master'
      style={{ position: 'relative', height: '100vh', background: '#fff' }}
    >
      <Header title={title} />
      <Wrapper>
        <ErrorBoundary fallback={<Error />}>{props.children || <Outlet />}</ErrorBoundary>
      </Wrapper>
    </motion.div>
  )
}

export default BookingLayout
