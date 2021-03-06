import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Grid } from 'swiper'
import 'swiper/css/grid'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { formatTime } from 'utils'
import Button from 'components/common/Button'

const TimeOption = styled.div`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
  }

  &[data-selected='true'] {
    background: #fac172;
    color: #fff;
  }
`

const TimeSelect = (props) => {
  const [selectedTime, setSelectedTime] = useState(undefined)

  const { data, onChange } = props
  const isExist = Boolean(data)

  const handleSelectOnClick = (selectTime) => {
    setSelectedTime(selectTime)
    onChange(selectTime)
  }

  const numberOfSlidesPerView = data && data.length < 7 ? 3 : 3.4

  return (
    <>
      {!isExist && <span style={{ fontStyle: 'italic' }}>There is no time at all.</span>}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Grid]}
        spaceBetween={24}
        slidesPerView={numberOfSlidesPerView}
        pagination={{ type: 'fractions', clickable: true }}
        grid={{
          fill: 'row',
          rows: 3
        }}
        className='mySwiper'
      >
        {data &&
          data.map((time) => (
            <SwiperSlide key={time.hour}>
              <Button
                variant='outline'
                onClick={() => handleSelectOnClick(time)}
                data-active={_.isEqual(time, selectedTime)}
              >
                {formatTime(time)}
              </Button>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

TimeSelect.propTypes = {
  data: PropTypes.array
}

TimeSelect.defaultProps = {
  data: []
}

export default TimeSelect
