import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bookingReducer from 'features/booking/bookingSlice'
import commonReducer from 'features/common/commonSlice'
import serviceReducer from 'features/service/serviceSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  common: commonReducer,
  booking: bookingReducer,
  service: serviceReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store
