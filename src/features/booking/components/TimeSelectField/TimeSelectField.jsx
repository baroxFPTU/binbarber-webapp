import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Grid } from 'swiper'
import 'swiper/css/grid'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { formatTime } from 'utils'
import Button from 'components/common/Button'
import styled from 'styled-components'

const ReStyledButtom = styled(Button)`
  margin: 0;
  &:hover {
    background-color: #fffae6;
    border: 1px solid ${(props) => props.theme.color.yellow[500]};
    box-shadow: 0 0 0 1px ${(props) => props.theme.color.yellow[500]};
    color: ${(props) => props.theme.color.black[500]};
  }
  &[data-active='true']:hover {
    background-color: ${(props) => props.theme.color.yellow[500]};
    color: #ffffff;
    box-shadow: none;
  }
`

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
              <ReStyledButtom
                variant='outline'
                onClick={() => handleSelectOnClick(time)}
                data-active={_.isEqual(time, value)}
                fullWidth
              >
                {formatTime(time)}
              </ReStyledButtom>
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
