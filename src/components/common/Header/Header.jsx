import React from 'react'
import CSSModule from './Header.module.scss'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className={CSSModule.header}>
      <Link to="./">
        <h2>Bin Barber</h2>
      </Link>
      <button className={CSSModule.navBookingBtn}>Đặt lịch <BsChevronRight/></button>
    </header>
  )
}

export default Header