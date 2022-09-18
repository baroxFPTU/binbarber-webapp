import { createSelector, createSlice } from '@reduxjs/toolkit'
import { format } from 'date-fns'

const initialState = {
  loading: false,
  cart: {
    userId: undefined,
    selectedServices: [],
    appliedDiscounts: [],
    bookedAt: undefined
  },
  isReviewing: false
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialState,
  reducers: {
    setUserId: (state, action) => {
      state.cart.userId = action.payload
    },
    setBookedAt: (state, action) => {
      state.cart.bookedAt = action.payload
    },
    addService: (state, action) => {
      state.cart.selectedServices.push(action.payload)
    },
    removeService: (state, action) => {
      const serviceId = action.payload.id
      state.cart.selectedServices = state.cart.selectedServices.filter(
        (service) => service.id !== serviceId
      )
    },
    addDiscount: (state, action) => {
      state.cart.appliedDiscounts.push(action.payload)
    },
    addBookingDate: (state, action) => {
      state.cart.bookedAt = action.payload
    },
    setIsReviewing: (state, action) => {
      state.isReviewing = action.payload
    },
    clearCart: (state) => {
      state.cart = { ...initialState.cart }
      state.isReviewing = false
    },
    fetchCreateBooking: (state) => {
      state.loading = true
    },
    fetchCreateBookingSuccess: (state) => {
      state.loading = false
    },
    fetchCreateBookingFailed: (state) => {
      state.loading = false
    }
  }
})

export const selectCart = (state) => state.booking.cart
export const selectBookingAtString = createSelector(selectCart, (cart) => {
  if (cart.bookedAt) {
    return format(cart.bookedAt, 'kk:mm - dd/MM/yyyy')
  }
})
export const selectSelectedServices = createSelector(selectCart, (cart) => cart.selectedServices)
export const selectIsSelectedService = createSelector(
  selectSelectedServices,
  (selectedServices) => selectedServices.length > 0
)
export const selectIsPickedDate = createSelector(selectCart, (cart) => Boolean(cart.bookedAt))
export const selectIsReviewing = (state) => state.booking.isReviewing
export const bookingActions = bookingSlice.actions
export default bookingSlice.reducer
