import { all } from 'redux-saga/effects'
import { bookingSaga } from 'features/booking/bookingSaga'

export default function* rootSaga() {
  yield all([bookingSaga()])
}
