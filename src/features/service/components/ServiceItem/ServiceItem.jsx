import React from 'react'
import CSSModule from './ServiceItem.module.scss'
import { motion } from 'framer-motion'

const ServiceItemVariants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: 'easeInOut'
    }
  }
}

function ServiceItem({ icon: Icon, label, ...props }) {
  return (
    <motion.div
      variants={ServiceItemVariants}
      initial='hidden'
      animate='show'
      exit='hidden'
      className={CSSModule.ServiceItem}
      {...props}
    >
      <div className={CSSModule.ServiceIcon}>{Icon ? <Icon /> : null}</div>
      <div className={CSSModule.Label}>{label}</div>
    </motion.div>
  )
}

export default ServiceItem
