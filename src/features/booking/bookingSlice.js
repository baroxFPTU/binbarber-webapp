import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: {
    name: '',
    phone: '',
    selectedServices: [],
    appliedDiscounts: [],
    bookedAt: null
  }
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.cart.name = action.payload
    },
    setPhone: (state, action) => {
      state.cart.phone = action.payload
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
    }
  }
})

export const selectCart = (state) => state.booking.cart
export const selectSelectedServices = createSelector(selectCart, (cart) => cart.selectedServices)
export const selectIsSelectedService = createSelector(
  selectSelectedServices,
  (selectedServices) => selectedServices.length > 0
)

export const bookingActions = bookingSlice.actions
export default bookingSlice.reducer
