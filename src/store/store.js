import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import bookingReducer from 'features/booking/bookingSlice'
import commonReducer from 'features/common/commonSlice'
import serviceReducer from 'features/service/serviceSlice'
import createSagaMiddleware from 'redux-saga'
import { history } from 'utils'
import rootSaga from './rootSaga'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    common: commonReducer,
    booking: bookingReducer,
    service: serviceReducer
  })

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history))
})

sagaMiddleware.run(rootSaga)

export default store
