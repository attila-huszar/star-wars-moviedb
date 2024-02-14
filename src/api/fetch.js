import axios from 'axios'
import { episodesSuccess, episodesError } from '../store/episodesSlice'
import { charactersSuccess, charactersError } from '../store/charactersSlice'
import { planetsSuccess, planetsError } from '../store/planetsSlice'
import { speciesSuccess, speciesError } from '../store/speciesSlice'
import { vehiclesSuccess, vehiclesError } from '../store/vehiclesSlice'
import { starshipsSuccess, starshipsError } from '../store/starshipsSlice'
import * as path from '../routes/pathConstants'

const fetchUrl = (url, actions) => async (dispatch) => {
  try {
    const response = await axios.get(url)
    dispatch(actions.success(response.data))
  } catch (error) {
    dispatch(actions.error(error.message))
  }
}

export const fetchData = (page) => async (dispatch) => {
  const url = path[page]

  const actions = {
    episodes: { success: episodesSuccess, error: episodesError },
    characters: { success: charactersSuccess, error: charactersError },
    planets: { success: planetsSuccess, error: planetsError },
    species: { success: speciesSuccess, error: speciesError },
    vehicles: { success: vehiclesSuccess, error: vehiclesError },
    starships: { success: starshipsSuccess, error: starshipsError },
  }[page]

  if (actions) {
    await fetchUrl(url, actions)(dispatch)
  }
}
