import { createSlice } from '@reduxjs/toolkit'

export const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    data: [],
    error: null,
    itemOffset: 0,
  },
  reducers: {
    planetsSuccess: (state, action) => {
      state.data = action.payload
    },
    planetsError: (state, action) => {
      state.error = action.payload
    },
    planetsItemOffset: (state, action) => {
      state.itemOffset = action.payload
    },
  },
})

export const { planetsSuccess, planetsError, planetsItemOffset } =
  planetsSlice.actions
