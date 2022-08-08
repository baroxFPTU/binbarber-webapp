import React, { useState } from 'react'
import { vi } from 'date-fns/locale'
import { format, isSameDay } from 'date-fns'
import { motion } from 'framer-motion'

import { dayLabel } from 'utils'

import CSSModule from './DateSelect.module.scss'
import { useRef } from 'react'
import { useOutsideAlerter } from 'hooks/useDetectClick'

const dateSelectVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}

const optionVariants = {
  hidden: {
    x: -100,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

const DateSelect = ({ selectedDate, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  useOutsideAlerter(ref, () => setIsOpen(false))

  const formatOptions = {
    pattern: 'eeee, dd/MM',
    locale: vi
  }

  const handleChangeOption = (index) => {
    onChange(index)
    setIsOpen(false)
  }

  return (
    <motion.div
      key='date-selector'
      variants={dateSelectVariants}
      initial='hidden'
      animate='show'
      exit='hidden'
      className={CSSModule.dateSelect}
      data-open={isOpen}
      ref={ref}
      // onBlur={handleOnBlur}
    >
      <div className={CSSModule.item} onClick={() => setIsOpen(!isOpen)}>
        {`${dayLabel(selectedDate, '-')} ${format(selectedDate, 'eeee, dd/MM', { locale: vi })}`}
      </div>
      {isOpen && (
        <motion.div
          variants={optionVariants}
          initial='hidden'
          animate='show'
          className={CSSModule.options}
        >
          {options.map((date, index) => (
            <div
              className={CSSModule.item}
              key={date.getTime()}
              onClick={() => handleChangeOption(index)}
              data-selected={isSameDay(date, selectedDate)}
            >
              {`${dayLabel(date, '-')} ${format(date, formatOptions.pattern, {
                locale: formatOptions.locale
              })}`}
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

DateSelect.propTypes = {}

export default DateSelect
