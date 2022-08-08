import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import { selectCart, bookingActions } from 'features/booking/bookingSlice'
import { addCategories, selectServiceCategories } from 'features/service/serviceSlice'
import { SERVICE_CATEGORIES } from 'utils/constants'
import ServiceCard from '../components/ServiceCard'
import styled from 'styled-components'
import Button from 'components/common/Button'
import { useNavigate } from 'react-router-dom'
import routes from 'config/routes'

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
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
}

function ServicePicker() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const serviceCategory = useSelector(selectServiceCategories)
  const bookingCart = useSelector(selectCart)
  const counterService = bookingCart.selectedServices.length

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
    if (!hasSelectedServices) return
    navigate(`${routes.booking}/chon-ngay`)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='show'
      style={{ marginBottom: '128px' }}
    >
      {serviceCategory &&
        serviceCategory.map((category) => (
          <div key={category.id}>
            <h2>{category.categoryName}</h2>
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
          </div>
        ))}
      <Button
        variant='primary'
        fixed
        disabled={!hasSelectedServices}
        onClick={confirmSelectService}
      >
        Chọn {hasSelectedServices ? counterService : ''} dịch vụ
      </Button>
    </motion.div>
  )
}

export default ServicePicker
