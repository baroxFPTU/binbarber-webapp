import { createSlice } from '@reduxjs/toolkit'

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    categories: []
  },
  reducers: {
    addCategories(state, action) {
      state.categories = [...action.payload]
    },
    clearServices(state) {
      state.categories = []
    }
  }
})

export const selectServiceCategories = (state) => state.service.categories
export const { addCategories, clearCategories } = serviceSlice.actions
export default serviceSlice.reducer
