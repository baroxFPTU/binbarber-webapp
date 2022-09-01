import Button from 'components/common/Button'
import Section from 'components/common/Section'
import ServiceItem from 'features/service/components/ServiceItem'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { INITIAL_SERVICE_ITEMS } from 'utils/constants'
import { AnimatePresence, motion } from 'framer-motion'

const SectionStyled = styled(Section)`
  background: #fff;
  padding: 18px;
  border-radius: 8px;
  box-shadow: 3px 4px 20px 0px #dddddd;
`

const FlexWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
`

const MotionButtom = motion(Button)

const ServiceWidget = () => {
  const navigate = useNavigate()

  const handleNavigateOnClick = () => {
    navigate('/len-lich/chon-dich-vu')
  }

  return (
    <SectionStyled>
      <FlexWrapper
        transition={{
          staggerChildren: 0.2
        }}
      >
        <AnimatePresence>
          {INITIAL_SERVICE_ITEMS.map((item, index) => (
            <ServiceItem
              key={index}
              label={item.label}
              icon={item.icon}
              onClick={handleNavigateOnClick}
            />
          ))}
        </AnimatePresence>
      </FlexWrapper>
      <MotionButtom
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        variant='primary'
        style={{ marginTop: '24px' }}
        fullWidth
        onClick={handleNavigateOnClick}
      >
        Đặt lịch ngay
      </MotionButtom>
    </SectionStyled>
  )
}

export default ServiceWidget
