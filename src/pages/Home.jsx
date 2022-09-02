import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SaleCarousel from 'components/carousels/SaleCarousel'
import Section from 'components/common/Section'
import ServiceWidget from 'components/widget/ServiceWidget'

import {
  bookingActions,
  selectIsPickedDate,
  selectIsSelectedService
} from 'features/booking/bookingSlice'
import { useTitle } from 'hooks/useTitle'

function Home() {
  const dispatch = useDispatch()
  const hasSelectedServices = useSelector(selectIsSelectedService)
  const isPickedDate = useSelector(selectIsPickedDate)
  const { onChangeBoth, reset } = useTitle()

  useEffect(() => {
    onChangeBoth('Trang chủ', 'Thái độ hơn trình độ')

    return () => {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (hasSelectedServices || isPickedDate) {
      dispatch(bookingActions.clearCart())
    }
  }, [hasSelectedServices, isPickedDate, dispatch])

  return (
    <>
      <ServiceWidget />
      <Section label='Ưu đãi nổi bật'>
        <SaleCarousel />
      </Section>
    </>
  )
}

export default Home
