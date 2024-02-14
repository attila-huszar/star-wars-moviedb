import { Navigate } from 'react-router-dom'
import { MovieElement } from '../pages/MovieElement'
import { MovieElementDetail } from '../pages/MovieElementDetail'
import { NotFound } from '../pages/NotFound'

export const routes = [
  {
    path: '/',
    element: <Navigate to="episodes" replace />,
  },
  {
    path: 'episodes',
    name: 'Episodes',
  },
  {
    path: 'characters',
    name: 'Characters',
  },
  {
    path: 'planets',
    name: 'Planets',
  },
  {
    path: 'species',
    name: 'Species',
  },
  {
    path: 'vehicles',
    name: 'Vehicles',
  },
  {
    path: 'starships',
    name: 'Starships',
  },
  { path: 'notfound', element: <NotFound /> },
  {
    path: '*',
    element: <Navigate to="/notfound" replace />,
  },
].map((route) => {
  if (route.name) {
    route.children = [
      {
        index: true,
        element: <MovieElement />,
      },
      {
        path: ':detailId',
        element: <MovieElementDetail />,
      },
    ]
  }
  return route
})
