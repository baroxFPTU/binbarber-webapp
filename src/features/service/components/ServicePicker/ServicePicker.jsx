import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addService, removeService, selectCart } from 'features/booking/bookingSlice'
import { addCategories, selectServiceCategories } from 'features/service/serviceSlice'
import { SERVICE_CATEGORIES } from 'utils/constants'
import ServiceCard from '../ServiceCard'
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
  }, [])

  const hasSelectedServices = counterService > 0

  const isExitService = useCallback(
    (serviceId) => {
      return bookingCart.selectedServices.indexOf(serviceId) !== -1
    },
    [bookingCart.selectedServices]
  )

  const updateCounterService = (serviceId) => {
    if (!isExitService(serviceId)) {
      dispatch(addService(serviceId))
    } else {
      dispatch(removeService(serviceId))
    }
  }

  const confirmSelectService = () => {
    if (!hasSelectedServices) return
    navigate(`${routes.booking}/chon-ngay`)
  }

  return (
    <div style={{ marginBottom: '128px' }}>
      {serviceCategory &&
        serviceCategory.map((category) => (
          <div key={category.id}>
            <h2>{category.categoryName}</h2>
            <FlexWrapper>
              {category.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  data={service}
                  onSelect={() => updateCounterService(service.id)}
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
    </div>
  )
}

export default ServicePicker
