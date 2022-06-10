import Header from 'components/common/Header/Header'
import MainNavigation from 'components/navigation/MainNavigation/MainNavigation'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from './Wrapper'

function DefaultLayout(props) {
  return (
    <>
      <Header isDefault/>
      <Wrapper className="default-layout-wrapper">
        {props.children || <Outlet/>}
      </Wrapper>
      <MainNavigation/>
    </>
  )
}

export default DefaultLayout