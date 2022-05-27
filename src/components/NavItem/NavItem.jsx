import React from 'react'
import { NavLink } from 'react-router-dom'
import CSSModule from './NavItem.module.scss'

function NavItem({ Icon, label, to }) {
  return (
    <NavLink to={to} className={CSSModule.navItem}>
      <div className={CSSModule.navItemIcon}>
        <Icon/>
      </div>
      <div className={CSSModule.navItemLabel}>{label}</div>
    </NavLink>
  )
}

export default NavItem