import React, { useEffect, useState } from 'react'
import { format, startOfToday, add, isToday, isTomorrow, isSameDay } from 'date-fns'
import { vi } from 'date-fns/locale'

import CSSModule from './DateSelect.module.scss'
import { useDispatch } from 'react-redux'
import { addBookingDate } from 'features/booking/bookingSlice'

const generateListDayOptions = (startDay = new Date()) => {
  const dates = [startDay]
  for (let i = 1; i <= 4; i++) {
    dates.push(
      add(startDay, {
        days: i
      })
    )
  }
  return dates
}

const DateSelect = (props) => {
  const dispatch = useDispatch()
  let today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [isOpen, setIsOpen] = useState(false)
  const dates = generateListDayOptions(today)
  const formatOptions = {
    pattern: 'eeee, dd/MM',
    locale: vi
  }

  const dayLabel = (date, suffix = '') => {
    if (isToday(date)) {
      return `Hôm nay ${suffix}`
    } else if (isTomorrow(date)) {
      return `Ngày mai ${suffix}`
    } else {
      return ' '
    }
  }

  const changeSelectedDate = (index) => {
    setSelectedDay(dates[index])
  }

  useEffect(() => {
    dispatch(addBookingDate(selectedDay.getTime()))
    setIsOpen(false)
  }, [selectedDay])

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
