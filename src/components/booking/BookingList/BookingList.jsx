import moment from 'moment'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { INITIAL_BOOKINGS, INITIAL_SERVICES, PAGE_DESTINATIONS } from 'utils/constants'
import CSSModule from './BookingList.module.scss'
import { cloneDeep } from 'lodash'
import useBookingStatus from 'hooks/useStatus'
import routes from 'config/routes'

function BookingList() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    // Stimulate fetch data from DB
    /**
     * this will do from backend
     */
    const newBookings = cloneDeep(INITIAL_BOOKINGS)
    const mapBookings = newBookings.map(booking => {
      booking.selectedServices = booking.selectedServices.map(service =>
        INITIAL_SERVICES.find(item => item.id == service)) || booking.selectedServices
      return booking
    })

    setBookings(mapBookings)
  }, [])

  if (!bookings || bookings.length === 0) {
    return (<span>Hiện chưa có cuộc hẹn nào. Lên lịch ngay thôi.</span>)
  }

  return (
    <>
      {bookings && bookings.map((item, index) => (<BookingItem key={index} data={item}/>))}
    </>
  )
}

function BookingItem ({ data }) {
  const { id: bookingId, bookedAt, selectedServices, isPaid } = data
  const [ color, message, onChangeStatus ] = useBookingStatus(isPaid)
  const navigate = useNavigate()
  const transformedServices = selectedServices.map((service) => service.label).join(', ')
  const convertedTime = moment(bookedAt).format('HH:mm')
  const convertedDate = moment(bookedAt).format('DD/MM/YYYY')
  useEffect(() => {
    onChangeStatus(isPaid)
  }, [isPaid, onChangeStatus])

  return (
    <div className={CSSModule.BookingItem} onClick={() => navigate(`${routes.myBooking}/${bookingId}`)}>
      <div className={CSSModule.BookingTimestamp}>
        <span className={CSSModule.time}>{convertedTime}</span>
        <span className={CSSModule.date}>{convertedDate}</span>
      </div>
      <div className={CSSModule.BookingInfo}>
        <h3 className="truncate-250" style={{ textDecoration: (isPaid == -1 ) && 'line-through' }}>{transformedServices}</h3>
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


