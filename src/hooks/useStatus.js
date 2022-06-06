import { useCallback, useEffect, useState } from 'react'

const useBookingStatus = (isPaid) => {
  const [paymentStatus, setPaymentStatus] = useState(isPaid)
  const [color, setColor] = useState('')
  const [message, setMessage] = useState('Đang cập nhật')
  const RED_COLOR = '#EE6363'
  const GRAY_COLOR = '#767676'
  const GREEN_COLOR = '#63B5A0'
  const UNPAID_MESSAGE = 'Chưa thanh toán'
  const CANCELLED_MESSAGE = 'Đã hủy'
  const PAID_MESSAGE = 'Đã thanh toán'

  useEffect(() => {
    switch (paymentStatus) {
    case (0) : {
      setColor(GRAY_COLOR)
      setMessage(UNPAID_MESSAGE)
      break
    }
    case (1) : {
      setColor(GREEN_COLOR)
      setMessage(PAID_MESSAGE)
      break
    }
    case (-1): {
      setColor(RED_COLOR)
      setMessage(CANCELLED_MESSAGE)
      break
    }
    default: {
      setColor('#333')
      setMessage('Đang cập nhật')
      break
    }
    }

    return () => {
      setColor('')
      setMessage('Đang cập nhật')
    }
  }, [paymentStatus])

  const onChangeStatus = useCallback((newPaymentStatus) => setPaymentStatus(newPaymentStatus), [])

  return [color, message, onChangeStatus]
}

export default useBookingStatus