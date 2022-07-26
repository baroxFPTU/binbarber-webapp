import React, { useState } from 'react'
import { vi } from 'date-fns/locale'
import { format, isSameDay } from 'date-fns'

import { dayLabel } from 'utils'

import CSSModule from './DateSelect.module.scss'

const DateSelect = ({ selectedDay, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const formatOptions = {
    pattern: 'eeee, dd/MM',
    locale: vi
  }

  const handleChangeOption = (index) => {
    onChange(index)
    setIsOpen(false)
  }

  return (
    <div className={CSSModule.dateSelect} data-open={isOpen}>
      <div className={CSSModule.item} onClick={() => setIsOpen(!isOpen)}>
        {`${dayLabel(selectedDay, '-')} ${format(selectedDay, 'eeee, dd/MM', { locale: vi })}`}
      </div>
      {isOpen && (
        <div className={CSSModule.options}>
          {options.map((date, index) => (
            <div
              className={CSSModule.item}
              key={date.getTime()}
              onClick={() => handleChangeOption(index)}
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
