import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import CSSModule from './Header.module.scss'

function Header(props) {
  const navigate = useNavigate()

  const goBackward = () => {
    navigate(-1)
  }

  if (!props.isDefault) {
    return (
      <div className={CSSModule.NavHeader}>
        <div className={CSSModule.NavHeaderContainer}>
          <button onClick={goBackward}>
            <MdOutlineArrowBackIosNew />
          </button>
          <h3>{props.title || 'Title'}</h3>
        </div>
      </div>
    )
  }

  return (
    <header className={CSSModule.MainHeader}>
      <Link to='./'>
        <h2>Bin Barber</h2>
        <p>Thái độ hơn trình độ</p>
      </Link>
    </header>
  )
}

export default Header
