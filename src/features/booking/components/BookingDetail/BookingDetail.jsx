import { bookingAPI } from 'api/bookingAPI'
import useBookingStatus from 'hooks/useStatus'
import moment from 'moment'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { bookingUtils, formatCurrency } from 'utils'
import CSSModule from './BookingDetail.module.scss'

function BookingDetail() {
  const params = useParams()
  const navigate = useNavigate()
  const [booking, setBookings] = useState(null)
  const [color, message, onChangeStatus] = useBookingStatus(-2)

  const convertedTime = booking && moment(booking.bookedAt).format('HH:mm')
  const convertedDate = booking && moment(booking.bookedAt).format('DD/MM/YYYY')
  const userSavedData = bookingUtils.loadFromLocalStorage()

  useEffect(() => {
    if (booking) onChangeStatus(booking.isPaid)
  }, [booking, onChangeStatus])

  useEffect(() => {
    const bookingId = params.bookingId
    ;(async () => {
      const loadedBooking = await (await bookingAPI.getById(bookingId)).data[0]
      if (!loadedBooking) return
      loadedBooking.selectedServices.sort((a, b) => b.price - a.price)
      setBookings(loadedBooking)
    })()
  }, [params])

  const subTotal = useMemo(() => {
    let result = 0
    if (booking) {
      result = booking.selectedServices.reduce((acc, service) => acc + service.price, 0)
    }
    return result
  }, [booking])

  const total = subTotal // Will update when have promote features

  const goBackward = () => {
    navigate(-1)
  }

  return (
    <div className={CSSModule.BookingDetail}>
      {booking && (
        <div className={CSSModule.BookingDetailContainer}>
          <div className={CSSModule.Row}>
            {userSavedData && <h3>{userSavedData.name}</h3>}
            <span>
              {convertedTime} - {convertedDate}
            </span>
          </div>
          <div className={CSSModule.Row}>
            <h3>Trạng thái</h3>
            <span style={{ color: color }}>{message}</span>
          </div>
          <div className='divider'></div>
          <h2>Dịch vụ</h2>
          {booking &&
            booking.selectedServices.map((service, index) => (
              <div className={CSSModule.Row} key={index}>
                <h3>{service.name}</h3>
                <span>{formatCurrency(service.price)}</span>
              </div>
            ))}
          <div className='divider'></div>
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
        </div>
      )}
      <div className='btn-group-vertical'>
        <button className='btn btn-primary'>Đặt phát nữa</button>
        <button className='btn' onClick={goBackward}>
          Trở lại
        </button>
      </div>
    </div>
  )
}

export default BookingDetail
