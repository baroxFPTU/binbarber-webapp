import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Grid } from 'swiper'
import 'swiper/css/grid'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { formatTime } from 'utils'
import Button from 'components/common/Button'

const TimeSelectField = (props) => {
  const { data, onChange, value } = props
  const isExist = Boolean(data)

  const handleSelectOnClick = (selectTime) => {
    onChange(selectTime)
  }

  const numberOfSlidesPerView = data && data.length < 7 ? 3 : 3.4

  return (
    <>
      {!isExist && <span style={{ fontStyle: 'italic' }}>There is no time at all.</span>}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Grid]}
        spaceBetween={18}
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
                data-active={_.isEqual(time, value)}
                style={{ margin: 0 }}
                fullWidth
              >
                {formatTime(time)}
              </Button>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

TimeSelectField.propTypes = {
  data: PropTypes.array
}

TimeSelectField.defaultProps = {
  data: []
}

export default TimeSelectField
