import { createSlice } from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    data: [],
    error: null,
    itemOffset: 0,
  },
  reducers: {
    charactersSuccess: (state, action) => {
      state.data = action.payload
    },
    charactersError: (state, action) => {
      state.error = action.payload
    },
    charactersItemOffset: (state, action) => {
      state.itemOffset = action.payload
    },
  },
})

export const { charactersSuccess, charactersError, charactersItemOffset } =
  charactersSlice.actions
