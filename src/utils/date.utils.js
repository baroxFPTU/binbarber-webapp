import { add, isToday, isTomorrow } from 'date-fns'

/**
 * Create a list of next days response to numberOfOptions
 * @param {*} startDay Date object
 * @param {*} numberOfOptions number
 * @returns Array Date objects
 */
export const generateListDayOptions = (startDay = new Date(), numberOfOptions) => {
  const dates = [startDay] //Init array options

  for (let i = 1; i <= numberOfOptions; i++) {
    dates.push(
      add(startDay, {
        days: i
      })
    )
  }
  return dates
}

/**
 * Label for date option, is today or tomorrow
 * @param {*} date Date object
 * @param {*} suffix String
 * @returns label String
 */
export const dayLabel = (date, suffix = '') => {
  if (isToday(date)) {
    return `Hôm nay ${suffix}`
  } else if (isTomorrow(date)) {
    return `Ngày mai ${suffix}`
  } else {
    return ' '
  }
}
