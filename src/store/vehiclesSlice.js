import { createSlice } from '@reduxjs/toolkit'

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    data: [],
    error: null,
    itemOffset: 0,
  },
  reducers: {
    vehiclesSuccess: (state, action) => {
      state.data = action.payload
    },
    vehiclesError: (state, action) => {
      state.error = action.payload
    },
    vehiclesItemOffset: (state, action) => {
      state.itemOffset = action.payload
    },
  },
})

export const { vehiclesSuccess, vehiclesError, vehiclesItemOffset } =
  vehiclesSlice.actions
