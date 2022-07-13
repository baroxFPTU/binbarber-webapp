import { takeEvery } from 'redux-saga/effects'
import { addBookingDate } from './bookingSlice'

function fetchTimesOfBookedDate() {
  console.log('FetchTimesOfBookedDate')
}

export function* bookingSaga() {
  yield takeEvery(addBookingDate().type, fetchTimesOfBookedDate)
}

// config saga
