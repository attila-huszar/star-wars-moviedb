import { createSlice } from '@reduxjs/toolkit'

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState: {
    data: [],
    error: null,
    itemOffset: 0,
  },
  reducers: {
    starshipsSuccess: (state, action) => {
      state.data = action.payload
    },
    starshipsError: (state, action) => {
      state.error = action.payload
    },
    starshipsItemOffset: (state, action) => {
      state.itemOffset = action.payload
    },
  },
})

export const { starshipsSuccess, starshipsError, starshipsItemOffset } =
  starshipsSlice.actions
