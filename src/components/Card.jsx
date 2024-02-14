import { Link } from 'react-router-dom'
import { arabicToRoman } from '../utils/arabicToRoman'
import style from '../styles/Card.module.css'
import PropTypes from 'prop-types'

export function Card({ page, ...item }) {
  return (
    <div className={style.card}>
      <Link to={`/${page}/${item.id}`}>
        <img
          src={item.image}
          className={style.cardImg}
          alt={`${page}: ${item.name}`}
        />
      </Link>
      <div className={style.cardBody}>
        <Link to={`/${page}/${item.id}`}>
          <p className={style.cardTitle}>
            {page === 'episodes'
              ? `Star Wars: Episode ${arabicToRoman(item.id)} - ${item.name}`
              : item.name}
          </p>
        </Link>
        <div className={style.cardText}>
          {page === 'episodes' && (
            <>
              <p className={style.cardSubText}>Episode:</p>
              <p>Episode {arabicToRoman(item.id)}</p>
              <p className={style.cardSubText}>Director:</p>
              <p>{item.director}</p>
              <p className={style.cardSubText}>Producer:</p>
              <p>{item.producer}</p>
              <p className={style.cardSubText}>Release Date:</p>
              <p>{item.release_date}</p>
            </>
          )}
          {page === 'characters' && (
            <>
              <p className={style.cardSubText}>Species:</p>
              <p>{item.species}</p>
              <p className={style.cardSubText}>Birth:</p>
              <p>
                {typeof item.born === 'number' && item.born < 0
                  ? Math.abs(item.born) + ' BBY'
                  : item.born || 'unknown'}
              </p>
              <p className={style.cardSubText}>Homeworld:</p>
              <p>
                {item.homeworld
                  ? item.homeworld.charAt(0).toUpperCase() +
                    item.homeworld.slice(1)
                  : 'unknown'}
              </p>
            </>
          )}
          {page === 'planets' && (
            <>
              <p className={style.cardSubText}>Climate:</p>
              <p>{item.climate}</p>
              <p className={style.cardSubText}>Terrain:</p>
              <p>{item.terrain}</p>
              <p className={style.cardSubText}>Population:</p>
              <p>{item.population}</p>
            </>
          )}
          {page === 'species' && (
            <>
              <p className={style.cardSubText}>Classification:</p>
              <p>{item.classification}</p>
              <p className={style.cardSubText}>Designation:</p>
              <p>{item.designation}</p>
            </>
          )}
          {page === 'vehicles' && (
            <>
              <p className={style.cardSubText}>Model:</p>
              <p>{item.model}</p>
              <p className={style.cardSubText}>Manufacturer:</p>
              <p>{item.manufacturer}</p>
              <p className={style.cardSubText}>Class:</p>
              <p>{item.class}</p>
            </>
          )}
          {page === 'starships' && (
            <>
              <p className={style.cardSubText}>Model:</p>
              <p>{item.model}</p>
              <p className={style.cardSubText}>Manufacturer:</p>
              <p>{item.manufacturer}</p>
              {item.cost_in_credits && (
                <p className={style.cardSubText}>Cost in credits:</p>
              )}
              <p>{item.cost_in_credits}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  page: PropTypes.string,
  item: PropTypes.object,
}
