import { useTitle } from 'hooks/useTitle'
import { cloneDeep } from 'lodash'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { INITIAL_BOOKINGS, INITIAL_SERVICES } from 'utils/constants'
import BookingItem from '../BookingItem'

const NotFoundMessageStyled = styled.span`
  width: 100%;
  background: #fff;

  padding: 12px;
  border-radius: 8px;

  text-align: center;
  font-weight: 500;
`

function BookingList() {
  const [bookings, setBookings] = useState([])
  const { onChangeBoth, reset } = useTitle()

  useEffect(() => {
    onChangeBoth('Lịch của tôi', 'Tất tần tật lịch đã đặt')

    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    // Stimulate fetch data from DB
    /**
     * this will do from backend
     */
    const newBookings = cloneDeep(INITIAL_BOOKINGS)
    const mapBookings = newBookings.map((booking) => {
      booking.selectedServices =
        booking.selectedServices.map((service) =>
          INITIAL_SERVICES.find((item) => item.id == service)
        ) || booking.selectedServices
      return booking
    })

    setBookings(mapBookings)
  }, [])

  if (!bookings || bookings.length === 0) {
    return (
      <NotFoundMessageStyled>
        Hiện chưa có cuộc hẹn nào. <Link to='/len-lich/chon-dich-vu'>Lên lịch ngay</Link> thôi.
      </NotFoundMessageStyled>
    )
  }

  return (
    <>
      <Helmet>
        <title>Lịch của tôi</title>
        <meta name='description' content='Tất tần tật các lịch bạn đã đặt' />
      </Helmet>
      {bookings && bookings.map((item, index) => <BookingItem key={index} data={item} />)}
    </>
  )
}

BookingList.propTypes = {
  data: PropTypes.array
}

BookingList.defaultProps = {
  data: []
}

export default BookingList
