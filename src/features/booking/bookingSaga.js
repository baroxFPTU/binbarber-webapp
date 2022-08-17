import { bookingAPI } from 'api/bookingAPI'
import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'
import { bookingActions } from './bookingSlice'

function* fetchCreateNewBooking(action) {
  try {
    const booking = action.payload
    yield call(bookingAPI.create(booking))
    yield put(push('/'))
    yield put(bookingActions.fetchCreateBookingSuccess())
  } catch (error) {
    yield put(bookingActions.fetchCreateBookingFailed())
  }
}

export function* bookingSaga() {
  yield takeLatest(bookingActions.fetchCreateBooking, fetchCreateNewBooking)
}

// config saga
