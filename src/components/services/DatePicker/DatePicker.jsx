import axiosClient from 'app/axiosClient'
import Button from 'components/common/Button'
import DateSelect from 'components/DateSelect'
import TimeSelect from 'components/TimeSelect'
import { startOfToday } from 'date-fns'
import { addBookingDate } from 'features/booking/bookingSlice'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { generateListDayOptions } from 'utils'

function DatePicker() {
  let today = startOfToday()
  const dispatch = useDispatch()
  const [selectedDay, setSelectedDay] = useState(today)
  const dates = generateListDayOptions(today, 4)

  const changeSelectedDate = (index) => {
    setSelectedDay(dates[index])
  }

  useEffect(() => {
    dispatch(addBookingDate(selectedDay.getTime()))
  }, [dispatch, selectedDay])

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const data = await axiosClient.get('/operation/working-date')
      console.log(data)
    })()
  }, [])

  return (
    <div>
      <h2>Bạn sẽ cắt vào ngày</h2>
      <DateSelect selectedDay={selectedDay} options={dates} onChange={changeSelectedDate} />
      <h2>vào lúc</h2>
      <TimeSelect />
      <Button variant='primary' fixed>
        Tiếp tục
      </Button>
    </div>
  )
}

export default memo(DatePicker)
