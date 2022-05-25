import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.scss'

function NavItem({ Icon, label, to }) {
  return (
    <NavLink activeClassName={classes.active} to={to} className={classes.navItem}>
      <div className={classes.navItemIcon}>
        <Icon/>
      </div>
      <div className={classes.navItemLabel}>{label}</div>
    </NavLink>
  );
}

export default NavItem;