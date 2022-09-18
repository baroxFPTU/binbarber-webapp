import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'

import routes from 'config/routes'
import {
  selectCart,
  bookingActions,
  selectIsPickedDate,
  selectIsReviewing
} from 'features/booking/bookingSlice'
import { useTitle } from 'hooks/useTitle'
import { SERVICE_CATEGORIES } from 'utils/constants'
import ServiceCard from '../components/ServiceCard'

import Button from 'components/common/Button'
import { FormSection } from '../../../components/Form'
import { addCategories, selectServiceCategories } from 'features/service/serviceSlice'

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
  const { onUpdateTitleAndDescription, reset } = useTitle()

  useEffect(() => {
    onUpdateTitleAndDescription('Chọn dịch vụ', 'Bạn muốn cắt tóc, gội hay uốn?')

    return () => {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    let backwardURL = isPickedDate ? `${routes.booking}/xem-lai` : `${routes.booking}/chon-ngay`
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
