import { useDispatch, useSelector } from 'react-redux'
import { format, startOfToday } from 'date-fns'
import React, { memo, useEffect, useState } from 'react'

import { generateListDayOptions } from 'utils'
import Button from 'components/common/Button'
import { operationAPI } from 'api/operationAPI'
import DateSelect from 'features/booking/components/DateSelect'
import TimeSelect from 'features/booking/components/TimeSelectField'
import { bookingActions, selectIsSelectedService } from 'features/booking/bookingSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import { PUBLIC_ROUTES } from 'routes'
import config from 'config'

function DatePicker() {
  let today = startOfToday()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isSelectedService = useSelector(selectIsSelectedService)

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
    if (!isSelectedService) {
      navigate(-1)
    }
  }, [])

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
      <h2>B???n s??? c???t v??o ng??y</h2>
      <DateSelect selectedDate={selectedDate} options={dates} onChange={changeSelectedDate} />
      <h2>v??o l??c</h2>
      <TimeSelect
        data={workingDate && workingDate.working_times}
        onChange={handleChangeSelectTime}
      />
      <Button
        variant='primary'
        fixed
        onClick={handleSubmitBookingDate}
        disabled={!(Boolean(selectedDate) && Boolean(selectedTime))}
      >
        Ti???p t???c
      </Button>
    </div>
  )
}

export default memo(DatePicker)
