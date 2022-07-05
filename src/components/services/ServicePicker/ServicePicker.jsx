import React, { useState } from 'react'

import GridWrapper from 'components/common/GridWrapper/GridWrapper'
import ServiceCard from '../ServiceCard/ServiceCard'
import { INITIAL_SERVICES_DETAILS } from 'utils/constants'

function ServicePicker() {
  const [counterService, setCounterService] = useState(0)

  const updateCounterService = (type) => {
    if (type === 'increase') {
      setCounterService((prevCounterService) => ++prevCounterService)
    } else {
      setCounterService((prevCounterService) => --prevCounterService)
    }
  }

  return (
    <div style={{ marginBottom: '128px' }}>
      <h2>Cắt gội cơ bản</h2>
      <GridWrapper col={2} gap={16}>
        {INITIAL_SERVICES_DETAILS.filter((service) => service.label == 'basic').map(
          (service, index) => (
            <ServiceCard key={index} service={service} onSelect={updateCounterService} />
          )
        )}
      </GridWrapper>
      <h2>Uốn tạo kiểu</h2>
      <GridWrapper col={2} gap={16}>
        {INITIAL_SERVICES_DETAILS.filter((service) => service.label == 'medium').map(
          (service, index) => (
            <ServiceCard key={index} service={service} onSelect={updateCounterService} />
          )
        )}
      </GridWrapper>
      <h2>Chăm sóc</h2>
      <GridWrapper col={2} gap={16}>
        {INITIAL_SERVICES_DETAILS.filter((service) => service.label == 'care').map(
          (service, index) => (
            <ServiceCard key={index} service={service} onSelect={updateCounterService} />
          )
        )}
      </GridWrapper>
      {counterService > 0 && (
        <button className='btn btn-primary btn-fixed'>Chọn {counterService} dịch vụ</button>
      )}
    </div>
  )
}

export default ServicePicker
