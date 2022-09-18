/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux'
import { format, startOfToday } from 'date-fns'
import { ErrorBoundary } from 'react-error-boundary'
import { Link, useNavigate } from 'react-router-dom'
import React, { memo, useEffect, useRef, useState } from 'react'

import config from 'config'
import { useTitle } from 'hooks/useTitle'
import { generateListDayOptions } from 'utils'
import { operationAPI } from 'api/operationAPI'
import useRedirectEmptyCart from 'hooks/useRedirectEmptyCart'
import { bookingActions } from 'features/booking/bookingSlice'

import Button from 'components/common/Button'
import Error from 'components/common/Error/Error'
import { FormSection } from '../../../components/Form'
import DateSelect from 'features/booking/components/DateSelect'
import TimeSelectField from 'features/booking/components/TimeSelectField'
import TimeSelectSkeleton from 'components/skeletons/TimeSelectSkeleton'

function DatePicker() {
  let today = startOfToday()
  const dispatch = useDispatch()
  const [watching] = useRedirectEmptyCart(`${config.routes.booking}/chon-dich-vu`)
  const navigate = useNavigate()
  const hasFetchedData = useRef(false)

  const [workingDate, setWorkingDate] = useState(undefined)
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedTime, setSelectedTime] = useState(undefined)
  const [error, setError] = useState(null)
  const dates = generateListDayOptions(today, 4)
  const { onUpdateTitleAndDescription, reset } = useTitle()

  useEffect(() => {
    onUpdateTitleAndDescription('Chọn ngày', 'Bạn sẽ cắt vào thứ mấy?')

    return () => {
      reset()
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      setError(undefined)

      try {
        if (hasFetchedData.current) return
        const fullDate = format(selectedDate, 'yyyy-MM-dd')
        let response = await operationAPI.getWorkingDate(fullDate)
        hasFetchedData.current = true
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

  const hasWorkingDate = Boolean(workingDate) && !error
  const isLoadWorkingDate = !workingDate && !error
  const isSelectTime = Boolean(selectedTime)

  return (
    <div>
      <FormSection title='Chọn ngày'>
        <DateSelect selectedDate={selectedDate} options={dates} onChange={changeSelectedDate} />
      </FormSection>
      <FormSection title='Thời gian'>
        <ErrorBoundary fallback={<Error />}>
          {hasWorkingDate && (
            <TimeSelectField
              value={selectedTime}
              data={workingDate && workingDate.working_times}
              onChange={handleChangeSelectTime}
            />
          )}
          {isLoadWorkingDate && <TimeSelectSkeleton />}
          {error && (
            <div>
              <Error>Không tìm thấy thời gian trống.</Error>
              <Link to='/'>Trở về trang chủ</Link>
            </div>
          )}
        </ErrorBoundary>
      </FormSection>
      {isSelectTime && (
        <Button
          variant='primary'
          fixed
          onClick={handleSubmitBookingDate}
          disabled={!(Boolean(selectedDate) && Boolean(selectedTime))}
        >
          Tiếp tục
        </Button>
      )}
    </div>
  )
}

export default memo(DatePicker)
