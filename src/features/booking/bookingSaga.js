import { bookingAPI } from 'api/bookingAPI'
import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'
import { bookingActions } from './bookingSlice'
import { stringify } from 'query-string'

function* fetchCreateNewBooking(action) {
  try {
    const booking = action.payload
    const bookingResponse = yield call(bookingAPI.create, booking)
    const query = stringify({ booking: bookingResponse.data.bookingId, status: 'success' })

    yield put(push(`/len-lich/ket-qua?${query}`))
    yield put(bookingActions.clearCart())
    yield put(bookingActions.fetchCreateBookingSuccess())
  } catch (error) {
    yield put(bookingActions.clearCart())
    yield put(push('/len-lich/ket-qua?status=failed'))
    yield put(bookingActions.fetchCreateBookingFailed())
  }
}

export function* bookingSaga() {
  yield takeLatest(bookingActions.fetchCreateBooking, fetchCreateNewBooking)
}

// config saga
