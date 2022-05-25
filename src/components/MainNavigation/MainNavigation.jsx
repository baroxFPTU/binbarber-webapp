import React from 'react'
import { classNames } from 'utils/classNames'
import classes from './MainNavigation.module.scss'
import { AiOutlineHome, AiOutlineCalendar, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { RiCoupon2Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import NavItem from 'components/NavItem/NavItem'

function MainNavigation(props) {
  return (
    <nav className={classes.navContainer}>
      <div className={classNames(classes.navWrapper)}>
        <NavItem Icon={AiOutlineHome} label="Trang chủ" to="/"/>
        <NavItem Icon={AiOutlineCalendar} label="Lịch của tôi" to="/manage-booking"/>
        <div className={classes.navItem}>
          <button className={classNames('btn', classes.navBtnAdd)}><AiOutlinePlus/></button>
        </div>
        <NavItem Icon={RiCoupon2Line} label="Vouchers" to="/vouchers"/>
        <NavItem Icon={AiOutlineUser} label="Tôi" to="/me"/>
      </div>
    </nav>
  )
}

export default MainNavigation