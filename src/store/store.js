import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from 'features/booking/bookingSlice'
import serviceReducer from 'features/service/serviceSlice'

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    service: serviceReducer
  }
})

export default store
