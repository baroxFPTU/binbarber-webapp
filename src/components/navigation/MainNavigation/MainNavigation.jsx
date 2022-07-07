import NavItem from 'components/navigation/NavItem/NavItem'
import React from 'react'
import { AiOutlineCalendar, AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { RiCoupon2Line } from 'react-icons/ri'
import { classNames } from 'utils/classNames'
import CSSModule from './MainNavigation.module.scss'
import config from 'config'
import { NavLink } from 'react-router-dom'

function MainNavigation() {
  return (
    <nav className={CSSModule.navContainer}>
      <div className={classNames(CSSModule.navWrapper)}>
        <NavItem Icon={AiOutlineHome} label='Trang chủ' to={config.routes.home} />
        <NavItem Icon={AiOutlineCalendar} label='Lịch của tôi' to={config.routes.myBooking} />
        <div className={CSSModule.navPrimaryItem}>
          <NavLink
            to={`${config.routes.booking}/chon-dich-vu`}
            className={classNames('btn', CSSModule.navBtnAdd)}
          >
            <AiOutlinePlus />
          </NavLink>
        </div>
        <NavItem Icon={RiCoupon2Line} label='Vouchers' to={config.routes.voucher} />
        <NavItem Icon={AiOutlineUser} label='Tôi' to={config.routes.profile} />
      </div>
    </nav>
  )
}

export default MainNavigation
