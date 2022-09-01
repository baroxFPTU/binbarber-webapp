import React, { useState } from 'react'
import { vi } from 'date-fns/locale'
import { format, isSameDay } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'

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
    height: 0,
    opacity: 0
  },
  show: {
    x: 0,
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.125
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.125
    }
  }
}

const DateSelect = ({ selectedDate, onChange, options }) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
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
      className={CSSModule.dateSelect}
      data-open={isOpen}
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={CSSModule.item} onClick={() => setIsOpen(!isOpen)}>
        {`${dayLabel(selectedDate, '-')} ${format(selectedDate, 'eeee, dd/MM', { locale: vi })}`}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='options'
            variants={optionVariants}
            initial='hidden'
            animate='show'
            exit='exit'
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
      </AnimatePresence>
    </motion.div>
  )
}

DateSelect.propTypes = {}

export default DateSelect
