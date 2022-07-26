import React from 'react'
import PropTypes from 'prop-types'
import { INITIAL_TIME_DATA } from 'utils/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Grid } from 'swiper'
import 'swiper/css/grid'
import styled from 'styled-components'

const TimeOption = styled.div`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
  }
`

const TimeSelect = (props) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Grid]}
        spaceBetween={24}
        slidesPerView={2.8}
        pagination={{ type: 'fractions', clickable: true }}
        grid={{
          fill: 'row',
          rows: 3
        }}
        className='mySwiper'
      >
        {INITIAL_TIME_DATA.map((timeData) => (
          <SwiperSlide key={timeData.id}>
            <TimeOption>{timeData.label}</TimeOption>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

TimeSelect.propTypes = {}

export default TimeSelect
