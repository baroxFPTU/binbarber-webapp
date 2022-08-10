import { format, startOfToday } from 'date-fns'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { operationAPI } from 'api/operationAPI'
import Button from 'components/common/Button'
import FormSection from 'components/Form/FormSection/FormSection'
import config from 'config'
import { bookingActions } from 'features/booking/bookingSlice'
import DateSelect from 'features/booking/components/DateSelect'
import TimeSelectField from 'features/booking/components/TimeSelectField'
import useRedirectEmptyCart from 'hooks/useRedirectEmptyCart'
import { Link, useNavigate } from 'react-router-dom'
import { generateListDayOptions } from 'utils'
import TimeSelectSkeleton from 'components/skeletons/TimeSelectSkeleton'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'components/common/Error/Error'
import { useTitle } from 'hooks/useTitle'

function DatePicker() {
  let today = startOfToday()
  const dispatch = useDispatch()
  const [watching] = useRedirectEmptyCart(`${config.routes.booking}/chon-dich-vu`)
  const navigate = useNavigate()

  const [workingDate, setWorkingDate] = useState(undefined)
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedTime, setSelectedTime] = useState(undefined)
  const [error, setError] = useState(null)
  const dates = generateListDayOptions(today, 4)
  const { onChangeBoth, reset } = useTitle()

  useEffect(() => {
    onChangeBoth('Chọn ngày', 'Bạn sẽ cắt vào thứ mấy?')

    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      setError(undefined)

      try {
        const fullDate = format(selectedDate, 'yyyy-MM-dd')
        let response = await operationAPI.getWorkingDate(fullDate)
        if (!response.data) {
          response = await operationAPI.generateWorkingDate(fullDate)
        }
        setWorkingDate(response.data)
      } catch (error) {
        setError(error.message)
      }
    })()
  }, [selectedDate])

  useEffect(() => {
    watching()
  }, [watching])

  const changeSelectedDate = (index) => {
    setSelectedDate(dates[index])
  }

  const handleChangeSelectTime = (selectedTime) => {
    setSelectedTime(selectedTime)
  }

  const handleSubmitBookingDate = () => {
    const bookedAt = new Date(selectedDate)
    bookedAt.setHours(selectedTime.hour, selectedTime.minute, 0)
    dispatch(bookingActions.setBookedAt(bookedAt.getTime()))
    navigate(`${config.routes.booking}/xem-lai`)
  }

  return (
    <div>
      <FormSection title='Chọn ngày'>
        <DateSelect selectedDate={selectedDate} options={dates} onChange={changeSelectedDate} />
      </FormSection>
      <FormSection title='Thời gian'>
        <ErrorBoundary fallback={<Error />}>
          {Boolean(workingDate) && !error && (
            <TimeSelectField
              value={selectedTime}
              data={workingDate && workingDate.working_times}
              onChange={handleChangeSelectTime}
            />
          )}
          {!workingDate && !error && <TimeSelectSkeleton />}
          {error && (
            <div>
              <Error>Không tìm thấy thời gian trống.</Error>
              <Link to='/'>Trở về trang chủ</Link>
            </div>
          )}
        </ErrorBoundary>
      </FormSection>
      <Button
        variant='primary'
        fixed
        onClick={handleSubmitBookingDate}
        disabled={!(Boolean(selectedDate) && Boolean(selectedTime))}
      >
        Tiếp tục
      </Button>
    </div>
  )
}

export default memo(DatePicker)
