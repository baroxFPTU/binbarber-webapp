import NavItem from 'components/navigation/NavItem/NavItem'
import React from 'react'
import { AiOutlineCalendar, AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { RiCoupon2Line } from 'react-icons/ri'
import { classNames } from 'utils/classNames'
import CSSModule from './MainNavigation.module.scss'

function MainNavigation(props) {
  return (
    <nav className={CSSModule.navContainer}>
      <div className={classNames(CSSModule.navWrapper)}>
        <NavItem Icon={AiOutlineHome} label="Trang chủ" to="/"/>
        <NavItem Icon={AiOutlineCalendar} label="Lịch của tôi" to="/manage-booking"/>
        <div className={CSSModule.navPrimaryItem}>
          <button className={classNames('btn', CSSModule.navBtnAdd)}><AiOutlinePlus/></button>
        </div>
        <NavItem Icon={RiCoupon2Line} label="Vouchers" to="/vouchers"/>
        <NavItem Icon={AiOutlineUser} label="Tôi" to="/me"/>
      </div>
    </nav>
  )
}

export default MainNavigation