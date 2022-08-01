import axiosClient from 'api/axiosClient'
import Button from 'components/common/Button'
import DateSelect from 'features/booking/components/DateSelect'
import TimeSelect from 'features/booking/components/TimeSelect'
import { format, startOfToday } from 'date-fns'
import { addBookingDate } from 'features/booking/bookingSlice'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { formatTime, generateListDayOptions } from 'utils'
import { operationAPI } from 'api/operationAPI'

function DatePicker() {
  let today = startOfToday()
  const dispatch = useDispatch()
  const [workingDate, setWorkingDate] = useState(undefined)
  const [selectedDay, setSelectedDay] = useState(today)
  const [selectedTime, setSelectedTime] = useState(undefined)
  const dates = generateListDayOptions(today, 4)

  useEffect(() => {
    dispatch(addBookingDate(selectedDay.getTime()))
  }, [dispatch, selectedDay])

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const fullDate = format(selectedDay, 'yyyy-MM-dd')
      const response = await operationAPI.getWorkingDate(fullDate)
      setWorkingDate(response.data)
    })()
  }, [selectedDay])

  const changeSelectedDate = (index) => {
    setSelectedDay(dates[index])
  }

  const handleChangeSelectTime = (selectedTime) => {
    setSelectedTime(selectedTime)
  }

  const handleSubmit = () => {
    console.log(`You booking at ${formatTime(selectedTime)} ${format(selectedDay, 'yyyy-MM-dd')}`)
  }

  return (
    <div>
      <h2>Bạn sẽ cắt vào ngày</h2>
      <DateSelect selectedDay={selectedDay} options={dates} onChange={changeSelectedDate} />
      <h2>vào lúc</h2>
      <TimeSelect
        data={workingDate && workingDate.working_times}
        onChange={handleChangeSelectTime}
      />
      <Button variant='primary' fixed onClick={handleSubmit}>
        Tiếp tục
      </Button>
    </div>
  )
}

export default memo(DatePicker)
