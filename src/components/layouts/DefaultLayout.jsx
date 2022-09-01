import Header from 'components/common/Header/Header'
import MainNavigation from 'components/navigation/MainNavigation/MainNavigation'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../common/Wrapper'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  enter: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: 20
  }
}

function DefaultLayout(props) {
  return (
    <motion.div
      className='app-master'
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{
        duration: 0.4
      }}
      style={{ position: 'relative', height: '100vh' }}
    >
      <Header isDefault />
      <Wrapper className='default-layout-wrapper'>{props.children || <Outlet />}</Wrapper>
      <MainNavigation />
    </motion.div>
  )
}

export default DefaultLayout
