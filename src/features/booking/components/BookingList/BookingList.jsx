import routes from 'config/routes'
import useBookingStatus from 'hooks/useStatus'
import { cloneDeep } from 'lodash'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { INITIAL_BOOKINGS, INITIAL_SERVICES } from 'utils/constants'
import CSSModule from './BookingList.module.scss'

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

  return <>{bookings && bookings.map((item, index) => <BookingItem key={index} data={item} />)}</>
}

function BookingItem({ data }) {
  const { id: bookingId, bookedAt, selectedServices, isPaid } = data
  const [color, message, onChangeStatus] = useBookingStatus(isPaid)
  const navigate = useNavigate()
  const transformedServices = selectedServices.map((service) => service.label).join(', ')
  const convertedTime = moment(bookedAt).format('HH:mm')
  const convertedDate = moment(bookedAt).format('DD/MM/YYYY')
  useEffect(() => {
    onChangeStatus(isPaid)
  }, [isPaid, onChangeStatus])

  return (
    <div
      className={CSSModule.BookingItem}
      onClick={() => navigate(`${routes.myBooking}/${bookingId}`)}
    >
      <div className={CSSModule.BookingTimestamp}>
        <span className={CSSModule.time}>{convertedTime}</span>
        <span className={CSSModule.date}>{convertedDate}</span>
      </div>
      <div className={CSSModule.BookingInfo}>
        <h3 className='truncate-250' style={{ textDecoration: isPaid == -1 && 'line-through' }}>
          {transformedServices}
        </h3>
        <p style={{ color: color }}>{message}</p>
      </div>
    </div>
  )
}

BookingList.propTypes = {
  data: PropTypes.array
}

BookingList.defaultProps = {
  data: []
}

export default BookingList
