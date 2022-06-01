import ModalBody from 'components/modals/ModalBody/ModalBody'
import ModalHeader from 'components/modals/ModalHeader/ModalHeader'
import moment from 'moment'
import React from 'react'
import CSSModule from './BookingList.module.scss'

function BookingList(props) {

  const temp = [
    {
      bookedAt: Date.now(),
      selectedServices: [{ id: 1, label: 'Cắt tóc' }, { id: 2, label: 'Nhuộm' }],
      isPaid: true
    },
    {
      bookedAt: Date.now(),
      selectedServices: [{ id: 12, label: 'Cắt tóc' }, { id: 12, label: 'Gội' }, { id: 1, label: 'Uốn' }, { id: 2, label: 'Nhuộm' }],
      isPaid: false
    },
    {
      bookedAt: Date.now(),
      selectedServices: [{ id: 12, label: 'Cắt tóc' }],
      isPaid: null
    }
  ]

  if (temp.length === 0) {
    return (<span>Hiện chưa có cuộc hẹn nào. Lên lịch ngay thôi.</span>)
  }

  return (
    <div className={CSSModule.BookingListWrapper}>
      {/* {temp.map((item, index) => (<BookingItem key={index} data={item}/>))} */}
      <div className="modal">
        <ModalHeader title="Thông tin dịch vụ"/>
        <ModalBody/>
      </div>
    </div>
  )
}

const BookingItem = ({ data }) => {
  let paymentStatusColor
  let paymentStatusMessage
  const { bookedAt, selectedServices, isPaid } = data
  const transformedServices = selectedServices.map((service) => service.label).join(', ')
  const convertedTime = moment(bookedAt).format('LT')
  const convertedDate = moment(bookedAt).subtract(10, 'days').calendar()

  if (isPaid == undefined || isPaid === null) {
    paymentStatusColor = '#EE6363'
    paymentStatusMessage = 'Đã hủy'
  }

  if (isPaid === false) {
    paymentStatusColor = '#767676'
    paymentStatusMessage = 'Chưa thanh toán'
  }
  if (isPaid === true) {
    paymentStatusColor = '#63B5A0'
    paymentStatusMessage = 'Đã thanh toán'
  }

  return (
    <div className={CSSModule.BookingItem}>
      <div className={CSSModule.BookingTimestamp}>
        <span className={CSSModule.time}>{convertedTime}</span>
        <span className={CSSModule.date}>{convertedDate}</span>
      </div>
      <div className={CSSModule.BookingInfo}>
        <h3 style={{textDecoration: (isPaid == null || isPaid == undefined) && 'line-through'}}>{transformedServices}</h3>
        <p style={{color: paymentStatusColor}}>{paymentStatusMessage}</p>
      </div>
    </div>
  )
}

export default BookingList