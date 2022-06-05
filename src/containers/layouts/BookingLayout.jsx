import Header from 'components/common/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from './Wrapper'

function BookingLayout(props) {
  return (
    <>
      <Header title="Thông tin dịch vụ"/>
      <Wrapper>
        <Outlet/>
      </Wrapper>
    </>
  )
}

export default BookingLayout