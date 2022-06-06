import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { INITIAL_BOOKINGS, INITIAL_SERVICES, INITIAL_USERS } from 'utils/constants'
import CSSModule from './BookingDetail.module.scss'
import moment from 'moment'
import { cloneDeep } from 'lodash'
import useBookingStatus from 'hooks/useStatus'
import { formatCurrency } from 'utils'

function BookingDetail() {
  const [booking, setBookings] = useState(null)
  const [color, message, onChangeStatus] = useBookingStatus(-2)
  const params = useParams()
  const navigate = useNavigate()
  const convertedTime = booking && moment(booking.bookedAt).format('HH:mm')
  const convertedDate = booking && moment(booking.bookedAt).format('DD/MM/YYYY')
  const subTotal = useMemo(() => {
    let result = 0
    if (booking) {
      result = booking.selectedServices.reduce((acc, service) => acc+ service.price, 0)
    }
    return result
  }, [booking])

  const total = subTotal

  useEffect(() => {
    if (booking) onChangeStatus(booking.isPaid)
  }, [booking, onChangeStatus ])

  useEffect(() => {
    const targetId = params.bookingId
    const loadedBooking = INITIAL_BOOKINGS.find(booking => booking.id == targetId)
    if (!loadedBooking) return

    loadedBooking.user = INITIAL_USERS.find(user => user.id == loadedBooking.userId)

    const newBooking = cloneDeep(loadedBooking)
    newBooking.selectedServices = loadedBooking.selectedServices.map(service => {
      const result = INITIAL_SERVICES.find(item => item.id == service)
      return result
    })
    setBookings(newBooking)
  }, [params.bookingId])

  const goBackward = () => {
    navigate(-1)
  }

  return (
    <div className={CSSModule.BookingDetail}>
      {booking && <div className={CSSModule.BookingDetailContainer}>
        <div className={CSSModule.Row}>
          <h3>{booking.user.name}</h3>
          <span>{convertedTime} - {convertedDate}</span>
        </div>
        <div className={CSSModule.Row}>
          <h3>Trạng thái</h3>
          <span style={{ color: color }}>{message}</span>
        </div>
        <div className="divider"></div>
        <h2>Dịch vụ</h2>
        {booking && booking.selectedServices.map((item, index) => (
          <div className={CSSModule.Row} key={index}>
            <h3>{item.label}</h3>
            <span>{formatCurrency(item.price)}</span>
          </div>
        ))}
        <div className="divider"></div>
        <div className={CSSModule.Row}>
          <h3>Tạm tính</h3>
          <span>{formatCurrency(subTotal)}</span>
        </div>
        {/* Discount function - Comming soon... */}
        {/* <div className={CSSModule.Row}>
          <h3>Giảm giá</h3>
          <span>- 12.000 VND</span>
        </div> */}
        <div className={CSSModule.Row}>
          <h3>Thành tiền</h3>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>}
      <div className="btn-group-vertical">
        <button className="btn btn-primary">Đặt phát nữa</button>
        <button className="btn" onClick={goBackward}>Trở lại</button>
      </div>
    </div>
  )
}

export default BookingDetail