import Header from 'components/common/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from './Wrapper'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'components/common/Error/Error'
import { useTitle } from 'hooks/useTitle'
function BookingLayout(props) {
  const { title } = useTitle()

  return (
    <>
      <Header title={title} />
      <Wrapper>
        <ErrorBoundary fallback={<Error />}>{props.children || <Outlet />}</ErrorBoundary>
      </Wrapper>
    </>
  )
}

export default BookingLayout
