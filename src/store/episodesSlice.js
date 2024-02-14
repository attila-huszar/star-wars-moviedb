import { createSlice } from '@reduxjs/toolkit'

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    data: [],
    error: null,
    itemOffset: 0,
  },
  reducers: {
    episodesSuccess: (state, action) => {
      state.data = action.payload
    },
    episodesError: (state, action) => {
      state.error = action.payload
    },
    episodesItemOffset: (state, action) => {
      state.itemOffset = action.payload
    },
  },
})

export const { episodesSuccess, episodesError, episodesItemOffset } =
  episodesSlice.actions
