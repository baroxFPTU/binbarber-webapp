import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: {
    title: 'BinBarber',
    description: 'Thái độ hơn trình độ'
  }
}

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    setPageTitle: (state, action) => {
      state.page.title = action.title
    },
    setPageDescription: (state, action) => {
      state.page.description = action.description
    },
    setPageData: (state, action) => {
      state.page.title = action.payload.title
      state.page.description = action.payload.description
    },
    resetPageData: (state) => {
      state.page = initialState.page
    }
  }
})

export const commonActions = commonSlice.actions

export const selectPageData = (state) => state.common.page
export const selectPageTitle = (state) => state.common.page.title
export const selectPageDescription = (state) => state.common.page.description

const commonReducer = commonSlice.reducer
export default commonReducer
