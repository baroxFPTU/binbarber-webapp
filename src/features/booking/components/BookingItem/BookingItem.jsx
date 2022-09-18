import routes from 'config/routes'
import useBookingStatus from 'hooks/useStatus'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CSSModule from './BookingItem.module.scss'

function BookingItem({ data }) {
  const { _id: bookingId, bookedAt, selectedServices, isPaid } = data
  const [color, message, onChangeStatus] = useBookingStatus(isPaid)
  const navigate = useNavigate()
  const transformedServices = selectedServices.map((service) => service.name).join(', ')
  const convertedTime = moment(bookedAt).format('HH:mm')
  const convertedDate = moment(bookedAt).format('DD/MM/YYYY')

  useEffect(() => {
    onChangeStatus(isPaid)
  }, [isPaid, onChangeStatus])

  return (
    <div
      className={CSSModule.BookingItem}
      onClick={() => navigate(`${routes.userBooking}/${bookingId}`)}
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

export default BookingItem
