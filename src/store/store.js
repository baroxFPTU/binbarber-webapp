import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from 'features/booking/bookingSlice'
import serviceReducer from 'features/service/serviceSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    service: serviceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store
