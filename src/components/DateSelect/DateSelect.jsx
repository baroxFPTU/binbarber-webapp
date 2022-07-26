import { vi } from 'date-fns/locale'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { format, isSameDay, startOfToday } from 'date-fns'

import CSSModule from './DateSelect.module.scss'
import { dayLabel, generateListDayOptions } from 'utils'
import { addBookingDate } from 'features/booking/bookingSlice'

const DateSelect = (props) => {
  let today = startOfToday()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(today)

  const dates = generateListDayOptions(today, 4)
  const formatOptions = {
    pattern: 'eeee, dd/MM',
    locale: vi
  }

  const changeSelectedDate = (index) => {
    setSelectedDay(dates[index])
  }

  useEffect(() => {
    dispatch(addBookingDate(selectedDay.getTime()))
    setIsOpen(false)
  }, [selectedDay])

  const dated = new Date(selectedDay.getTime())
  console.log(dated)
  dated.setHours(8)
  dated.setMinutes(10)
  console.log(dated)
  return (
    <div className={CSSModule.dateSelect} data-open={isOpen}>
      <div className={CSSModule.item} onClick={() => setIsOpen(!isOpen)}>
        {`${dayLabel(selectedDay, '-')} ${format(selectedDay, 'eeee, dd/MM', { locale: vi })}`}
      </div>
      {isOpen && (
        <div className={CSSModule.options}>
          {dates.map((date, index) => (
            <div
              className={CSSModule.item}
              key={date.getTime()}
              onClick={() => changeSelectedDate(index)}
              data-selected={isSameDay(date, selectedDay)}
            >
              {`${dayLabel(date, '-')} ${format(date, formatOptions.pattern, {
                locale: formatOptions.locale
              })}`}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

DateSelect.propTypes = {}

export default DateSelect
