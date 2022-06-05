import NavItem from 'components/navigation/NavItem/NavItem'
import React from 'react'
import { AiOutlineCalendar, AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { RiCoupon2Line } from 'react-icons/ri'
import { classNames } from 'utils/classNames'
import { PAGE_DESTINATIONS } from 'utils/constants'
import CSSModule from './MainNavigation.module.scss'

function MainNavigation(props) {
  return (
    <nav className={CSSModule.navContainer}>
      <div className={classNames(CSSModule.navWrapper)}>
        <NavItem Icon={AiOutlineHome} label="Trang chủ" to={PAGE_DESTINATIONS.HOME}/>
        <NavItem Icon={AiOutlineCalendar} label="Lịch của tôi" to={PAGE_DESTINATIONS.MANAGE_BOOKING}/>
        <div className={CSSModule.navPrimaryItem}>
          <button className={classNames('btn', CSSModule.navBtnAdd)}><AiOutlinePlus/></button>
        </div>
        <NavItem Icon={RiCoupon2Line} label="Vouchers" to={PAGE_DESTINATIONS.VOUCHERS}/>
        <NavItem Icon={AiOutlineUser} label="Tôi" to={PAGE_DESTINATIONS.ME}/>
      </div>
    </nav>
  )
}

export default MainNavigation