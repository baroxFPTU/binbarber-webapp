import { bookingAPI } from 'api/bookingAPI'
import { useTitle } from 'hooks/useTitle'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
  const hasFetchedData = useRef(false)
  const { onUpdateTitleAndDescription, reset } = useTitle()

  useEffect(() => {
    onUpdateTitleAndDescription('Lịch của tôi', 'Tất tần tật lịch đã đặt')

    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      if (hasFetchedData.current) return
      const newBookings = await bookingAPI.getAll()
      hasFetchedData.current = true
      setBookings(newBookings.data)
    })()
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
