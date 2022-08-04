import React from 'react'
import CSSModule from './ServiceItem.module.scss'

function ServiceItem({ icon: Icon, label, ...props }) {
  return (
    <div className={CSSModule.ServiceItem} {...props}>
      <div className={CSSModule.ServiceIcon}>{Icon ? <Icon /> : null}</div>
      <div className={CSSModule.Label}>{label}</div>
    </div>
  )
}

export default ServiceItem
