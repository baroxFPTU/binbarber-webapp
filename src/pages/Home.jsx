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
import { useTitle } from 'hooks/useTitle'
import { Modal, ModalOverlay, ModalHeader, ModalContent } from 'components/modals'

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
  }, [])

  useEffect(() => {
    if (hasSelectedServices || isPickedDate) {
      dispatch(bookingActions.clearCart())
    }
  }, [hasSelectedServices, isPickedDate, dispatch])

  return (
    <>
      <ServiceWidget />
      <FeaturedSection label='Ưu đãi nổi bật'>
        <SaleCarousel />
      </FeaturedSection>
      <Modal isOpen={true}>
        <ModalOverlay />
        <ModalContent top>
          <ModalHeader>Modal</ModalHeader>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi neque doloremque ducimus
          earum enim, consequatur atque iure repellat. Aperiam maxime saepe quam dolorum magni,
          perferendis quia fugiat quidem delectus cumque?
        </ModalContent>
      </Modal>
    </>
  )
}

export default Home
