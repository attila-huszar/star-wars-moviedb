import { createSlice } from '@reduxjs/toolkit'

export const speciesSlice = createSlice({
  name: 'species',
  initialState: {
    data: [],
    error: null,
    itemOffset: 0,
  },
  reducers: {
    speciesSuccess: (state, action) => {
      state.data = action.payload
    },
    speciesError: (state, action) => {
      state.error = action.payload
    },
    speciesItemOffset: (state, action) => {
      state.itemOffset = action.payload
    },
  },
})

export const { speciesSuccess, speciesError, speciesItemOffset } =
  speciesSlice.actions
