import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'

import {
  selectCart,
  bookingActions,
  selectIsPickedDate,
  selectIsReviewing
} from 'features/booking/bookingSlice'
import { addCategories, selectServiceCategories } from 'features/service/serviceSlice'
import { SERVICE_CATEGORIES } from 'utils/constants'
import ServiceCard from '../components/ServiceCard'
import styled from 'styled-components'
import Button from 'components/common/Button'
import { useNavigate } from 'react-router-dom'
import routes from 'config/routes'
import FormSection from 'components/form/FormSection'
import { useTitle } from 'hooks/useTitle'

const FlexWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  & > div {
    flex: 1;
    min-width: 170px;
  }
`

const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}

function ServicePicker() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const serviceCategory = useSelector(selectServiceCategories)
  const isPickedDate = useSelector(selectIsPickedDate)
  const isReviewing = useSelector(selectIsReviewing)
  const bookingCart = useSelector(selectCart)
  const counterService = bookingCart.selectedServices.length
  const { onChangeBoth, reset } = useTitle()

  useEffect(() => {
    onChangeBoth('Chọn dịch vụ', 'Bạn muốn cắt tóc, gội hay uốn?')

    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    //init service categories
    if (serviceCategory.length === 0) {
      dispatch(addCategories(SERVICE_CATEGORIES.data))
    }
  }, [dispatch, serviceCategory])

  const hasSelectedServices = counterService > 0

  const isExitService = useCallback(
    (serviceId) => {
      return bookingCart.selectedServices.find((service) => service.id === serviceId) != null
    },
    [bookingCart.selectedServices]
  )

  const addService = (service) => {
    if (!isExitService(service.id)) {
      dispatch(bookingActions.addService(service))
    } else {
      dispatch(bookingActions.removeService(service))
    }
  }

  const confirmSelectService = () => {
    let backwardURL = -1

    if (hasSelectedServices && isPickedDate && isReviewing)
      backwardURL = `${routes.booking}/xem-lai`

    if (hasSelectedServices && !isReviewing) backwardURL = `${routes.booking}/chon-ngay`

    navigate(backwardURL)
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='show'
        style={{ marginBottom: '128px' }}
      >
        {serviceCategory &&
          serviceCategory.map((category) => (
            <FormSection title={category.name} key={category.id}>
              <FlexWrapper>
                {category.services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    data={service}
                    onSelect={() => addService(service)}
                    isSelected={isExitService(service.id)}
                  />
                ))}
              </FlexWrapper>
            </FormSection>
          ))}
        <AnimatePresence>
          {hasSelectedServices && (
            <Button
              key='something'
              variant='primary'
              fixed
              disabled={!hasSelectedServices}
              onClick={confirmSelectService}
            >
              Chọn {hasSelectedServices ? counterService : ''} dịch vụ
            </Button>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}

export default ServicePicker
