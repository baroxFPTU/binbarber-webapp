import Header from 'components/common/Header/Header'
import MainNavigation from 'components/navigation/MainNavigation/MainNavigation'
import React from 'react'
import Wrapper from './Wrapper'

function DefaultLayout(props) {
  return (
    <>
      <Header isDefault/>
      <Wrapper>
        {/* <Outlet/> */}
        {props.children}
      </Wrapper>
      <MainNavigation/>
    </>
  )
}

export default DefaultLayout