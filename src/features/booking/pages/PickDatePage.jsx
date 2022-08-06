import { format, startOfToday } from 'date-fns'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { operationAPI } from 'api/operationAPI'
import Button from 'components/common/Button'
import FormSection from 'components/Form/FormSection/FormSection'
import config from 'config'
import { bookingActions } from 'features/booking/bookingSlice'
import DateSelect from 'features/booking/components/DateSelect'
import TimeSelect from 'features/booking/components/TimeSelectField'
import useRedirectEmptyCart from 'hooks/useRedirectEmptyCart'
import { useNavigate } from 'react-router-dom'
import { generateListDayOptions } from 'utils'
import TimeSelectSkeleton from 'components/skeletons/TimeSelectSkeleton'

function DatePicker() {
  let today = startOfToday()
  const dispatch = useDispatch()
  const [watching] = useRedirectEmptyCart(`${config.routes.booking}/chon-dich-vu`)
  const navigate = useNavigate()

  const [workingDate, setWorkingDate] = useState(undefined)
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedTime, setSelectedTime] = useState(undefined)
  const dates = generateListDayOptions(today, 4)

  useEffect(() => {
    dispatch(bookingActions.addBookingDate(selectedDate.getTime()))
  }, [dispatch, selectedDate])

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const fullDate = format(selectedDate, 'yyyy-MM-dd')
      let response = await operationAPI.getWorkingDate(fullDate)
      if (!response.data) {
        response = await operationAPI.generateWorkingDate(fullDate)
      }
      setWorkingDate(response.data)
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
        {workingDate ? (
          <TimeSelect
            value={selectedTime}
            data={workingDate && workingDate.working_times}
            onChange={handleChangeSelectTime}
          />
        ) : (
          <TimeSelectSkeleton />
        )}
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
