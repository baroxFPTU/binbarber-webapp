import NavItem from 'components/navigation/NavItem/NavItem'
import React from 'react'
import { AiOutlineCalendar, AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { RiCoupon2Line } from 'react-icons/ri'
import { classNames } from 'utils/className'
import CSSModule from './MainNavigation.module.scss'
import config from 'config'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
function MainNavigation() {
  return (
    <motion.nav animate={{ opacity: 1 }} className={CSSModule.navContainer}>
      <div className={classNames(CSSModule.navWrapper)}>
        <NavItem Icon={AiOutlineHome} label='Trang chủ' to={config.routes.home} />
        <NavItem Icon={AiOutlineCalendar} label='Lịch của tôi' to={config.routes.userBooking} />
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
    </motion.nav>
  )
}

export default MainNavigation
