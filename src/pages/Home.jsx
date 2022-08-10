import React from 'react'

import SaleCarousel from 'components/carousels/SaleCarousel'
import FeaturedSection from 'components/common/FeaturedSection'
import ServiceWidget from 'components/widget/ServiceWidget'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  bookingActions,
  selectIsPickedDate,
  selectIsSelectedService
} from 'features/booking/bookingSlice'

function Home() {
  const dispatch = useDispatch()
  const hasSelectedServices = useSelector(selectIsSelectedService)
  const isPickedDate = useSelector(selectIsPickedDate)
  useEffect(() => {
    if (hasSelectedServices && isPickedDate) {
      dispatch(bookingActions.clearCart())
    }
  }, [hasSelectedServices, isPickedDate, dispatch])

  return (
    <>
      <ServiceWidget />
      <FeaturedSection label='Ưu đãi nổi bật'>
        <SaleCarousel />
      </FeaturedSection>
    </>
  )
}

export default Home
