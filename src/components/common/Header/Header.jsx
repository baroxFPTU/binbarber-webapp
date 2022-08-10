import React from 'react'
import PropTypes from 'prop-types'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import CSSModule from './Header.module.scss'
import { useSelector } from 'react-redux'
import { selectPageData } from 'features/common/commonSlice'

function Header({ title, isDefault }) {
  const pageData = useSelector(selectPageData)
  const navigate = useNavigate()

  const goBackward = () => {
    navigate(-1)
  }

  if (!isDefault) {
    return (
      <div className={CSSModule.NavHeader}>
        <div className={CSSModule.NavHeaderContainer}>
          <button onClick={goBackward}>
            <MdOutlineArrowBackIosNew />
          </button>
          <h3>{title || 'Title'}</h3>
        </div>
      </div>
    )
  }

  return (
    <header className={CSSModule.MainHeader}>
      <h2>{pageData.title === 'Trang chủ' ? 'BinBarber' : pageData.title}</h2>
      <p>{pageData.description}</p>
    </header>
  )
}

Header.prototypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isDefault: PropTypes.bool
}

Header.defaultProps = {
  title: 'Bin Barber',
  description: 'Thái độ hơn trình độ'
}

export default Header
