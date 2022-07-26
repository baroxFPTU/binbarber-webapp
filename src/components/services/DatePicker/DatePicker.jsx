import Button from 'components/common/Button'
import DateSelect from 'components/DateSelect'
import TimeSelect from 'components/TimeSelect'
import React from 'react'

/**
 * 1. label of time object
 * 2. value of time
 * 3. isFree
 */

function DatePicker(props) {
  return (
    <div>
      <h2>Bạn sẽ cắt vào ngày</h2>
      <DateSelect />
      <h2>vào lúc</h2>
      <TimeSelect />
      <Button variant='primary' fixed>
        Tiếp tục
      </Button>
    </div>
  )
}

export default DatePicker
