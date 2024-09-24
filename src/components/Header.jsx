import { Link, NavLink } from 'react-router-dom'
import { routes } from '../routes/routes'
import style from '../styles/Header.module.css'
import logo from '../assets/svg/logo.svg'
import IconEpisodes from '../assets/svg/episodes.svg?react'
import IconCharacters from '../assets/svg/characters.svg?react'
import IconPlanets from '../assets/svg/planets.svg?react'
import IconSpecies from '../assets/svg/species.svg?react'
import IconVehicles from '../assets/svg/vehicles.svg?react'
import IconStarships from '../assets/svg/starships.svg?react'

const navbarIcons = {
  episodes: <IconEpisodes />,
  characters: <IconCharacters />,
  planets: <IconPlanets />,
  species: <IconSpecies />,
  vehicles: <IconVehicles />,
  starships: <IconStarships />,
}

export function Header() {
  return (
    <header className={style.navbar}>
      <Link to="episodes" className={style.logo}>
        <img src={logo} alt="logo" />
      </Link>

      {routes
        .filter((route) => 'name' in route)
        .map((link, idx) => (
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? style.active : undefined)}
            key={idx}>
            <div className={style.navLink}>
              {navbarIcons[link.path]}
              {link.name}
            </div>
          </NavLink>
        ))}
    </header>
  )
}
