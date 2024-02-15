import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

const mockCharacters = [
  {
    id: 1,
    name: 'Luke Skywalker',
    height: 1.72,
    mass: 77,
    born: -19,
    gender: 'male',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    homeworld: 'tatooine',
    image:
      'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg',
    films: [
      {
        id: 4,
        name: 'A New Hope',
      },
      {
        id: 5,
        name: 'The Empire Strikes Back',
      },
      {
        id: 6,
        name: 'Return of the Jedi',
      },
      {
        id: 3,
        name: 'Revenge of the Sith',
      },
    ],
    species: [],
    vehicles: [
      {
        id: 14,
        name: 'Snowspeeder',
      },
      {
        id: 12,
        name: 'Imperial Speeder Bike',
      },
    ],
    starships: [
      {
        id: 12,
        name: "X-wing'",
      },
      {
        id: 6,
        name: "Imperial shuttle'",
      },
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
  },
]

vi.mock('axios')

axios.get.mockImplementation(() => {
  return Promise.resolve({
    status: 200,
    data: mockCharacters,
  })
})

describe('App', () => {
  it('navigates between pages and displays data', async () => {
    const user = userEvent.setup()
    render(<App />, { wrapper: BrowserRouter })

    await user.click(screen.getByText(/characters/i))
    expect(window.location.pathname).toBe('/characters')

    await waitFor(() =>
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument(),
    )
  })
})
