import { configureStore } from '@reduxjs/toolkit'
import { episodesSlice } from './episodesSlice'
import { charactersSlice } from './charactersSlice'
import { planetsSlice } from './planetsSlice'
import { speciesSlice } from './speciesSlice'
import { vehiclesSlice } from './vehiclesSlice'
import { starshipsSlice } from './starshipsSlice'

export const store = configureStore({
  reducer: {
    episodes: episodesSlice.reducer,
    characters: charactersSlice.reducer,
    planets: planetsSlice.reducer,
    species: speciesSlice.reducer,
    vehicles: vehiclesSlice.reducer,
    starships: starshipsSlice.reducer,
  },
})
