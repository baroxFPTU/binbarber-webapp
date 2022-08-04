import Button from 'components/common/Button'
import FeaturedSection from 'components/common/FeaturedSection'
import ServiceItem from 'features/service/components/ServiceItem'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { INITIAL_SERVICE_ITEMS } from 'utils/constants'

const FeaturedSectionStyled = styled(FeaturedSection)`
  background: #fff;
  padding: 18px;
  border-radius: 8px;
  box-shadow: 4px 4px 9px 0 #e9e9e9;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
`

const ServiceWidget = () => {
  const navigate = useNavigate()

  const handleNavigateOnClick = () => {
    navigate('/len-lich/chon-dich-vu')
  }

  return (
    <FeaturedSectionStyled>
      <FlexWrapper>
        {INITIAL_SERVICE_ITEMS.map((item, index) => (
          <ServiceItem
            key={index}
            label={item.label}
            icon={item.icon}
            onClick={handleNavigateOnClick}
          />
        ))}
      </FlexWrapper>
      <Button
        variant='primary'
        style={{ marginTop: '24px' }}
        fullWidth
        onClick={handleNavigateOnClick}
      >
        Đặt lịch ngay
      </Button>
    </FeaturedSectionStyled>
  )
}

export default ServiceWidget
