import Header from 'components/common/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from './Wrapper'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'components/common/Error/Error'
function BookingLayout(props) {
  return (
    <>
      <Header title='Thông tin dịch vụ' />
      <Wrapper>
        <ErrorBoundary fallback={<Error />}>{props.children || <Outlet />}</ErrorBoundary>
      </Wrapper>
    </>
  )
}

export default BookingLayout
