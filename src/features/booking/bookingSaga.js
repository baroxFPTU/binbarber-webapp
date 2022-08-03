import { takeEvery } from 'redux-saga/effects'
import { bookingActions } from './bookingSlice'

function fetchTimesOfBookedDate() {}

export function* bookingSaga() {
  yield takeEvery(bookingActions.addBookingDate().type, fetchTimesOfBookedDate)
}

// config saga
