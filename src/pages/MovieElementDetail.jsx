import { useLocation, useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchData } from '../api/fetch'
import { useDispatch, useSelector } from 'react-redux'
import { LoadPending } from '../components/LoadPending'
import { LoadError } from '../components/LoadError'
import { arabicToRoman } from '../utils/arabicToRoman'
import style from '../styles/MovieElementDetail.module.css'

export function MovieElementDetail() {
  const location = useLocation()
  const page = location.pathname.split('/')[1]
  const dispatch = useDispatch()
  const { data, error } = useSelector((state) => state[page])
  const { detailId } = useParams()
  const idx = data.findIndex((item) => item.id == detailId)

  useEffect(() => {
    dispatch(fetchData(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (error) {
    return <LoadError error={error} />
  }

  if (!data?.length) {
    return <LoadPending page={page} />
  }

  return (
    <article className={style.detailContainer}>
      <div className={style.breadcrumb}>
        <Link to={`/${page}`} className={style.breadcrumbUp}>
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </Link>
        <span className={style.breadcrumbTitle}>{` / ${data[idx].name}`}</span>
      </div>
      <div className={style.detailBody}>
        <img
          className={style.image}
          src={data[idx].image}
          alt={data[idx].name}
        />
        <div>
          <p className={style.detailTitle}>
            {page === 'episodes'
              ? `Star Wars: Episode ${arabicToRoman(data[idx].id)} - ${data[idx].name}`
              : data[idx].name}
          </p>
          <div className={style.detailText}>
            {page === 'episodes' && (
              <>
                <p className={style.detailSubText}>Episode:</p>
                <p>Episode {arabicToRoman(data[idx].id)}</p>
                <p className={style.detailSubText}>Director:</p>
                <p>{data[idx].director}</p>
                <p className={style.detailSubText}>Producer:</p>
                <p>{data[idx].producer}</p>
                <p className={style.detailSubText}>Release date:</p>
                <p>{data[idx].release_date}</p>
                <p className={style.detailSubText}>Characters:</p>
                <p>
                  {data[idx].characters.map((item) => item.name).join(', ')}
                </p>
                <p className={style.detailSubText}>Planets:</p>
                <p>{data[idx].planets.map((item) => item.name).join(', ')}</p>
                <p className={style.detailSubText}>Starships:</p>
                <p>{data[idx].starships.map((item) => item.name).join(', ')}</p>
                <p className={style.detailSubText}>Vehicles:</p>
                <p>{data[idx].vehicles.map((item) => item.name).join(', ')}</p>
                <p className={style.detailSubText}>Species:</p>
                <p>{data[idx].species.map((item) => item.name).join(', ')}</p>
                <p className={style.detailSubText}>Created:</p>
                <p>{new Date(data[idx].created).toLocaleDateString('sv-SE')}</p>
                <p className={style.detailSubText}>Edited:</p>
                <p>{new Date(data[idx].edited).toLocaleDateString('sv-SE')}</p>
                <p></p>
                <p>{data[idx].opening_crawl}</p>
              </>
            )}
            {page === 'characters' && (
              <>
                <p className={style.detailSubText}>Species:</p>
                <p>{data[idx].species}</p>
                <p className={style.detailSubText}>Gender:</p>
                <p>{data[idx].gender}</p>
                <p className={style.detailSubText}>Birth:</p>
                <p>
                  {typeof data[idx].born === 'number' && data[idx].born < 0
                    ? Math.abs(data[idx].born) + ' BBY'
                    : data[idx].born || 'unknown'}
                </p>
                <p className={style.detailSubText}>Death:</p>
                <p>
                  {typeof data[idx].died === 'number' && data[idx].died < 0
                    ? Math.abs(data[idx].died) + ' BBY'
                    : data[idx].died || 'unknown'}
                </p>
                <p className={style.detailSubText}>Homeworld:</p>
                <p>
                  {typeof data[idx].homeworld === 'string' &&
                  data[idx].homeworld.length
                    ? data[idx].homeworld.charAt(0).toUpperCase() +
                      data[idx].homeworld.slice(1)
                    : 'unknown'}
                </p>
                <p className={style.detailSubText}>Affiliations:</p>
                <p>
                  {data[idx].affiliations.length
                    ? data[idx].affiliations.join(', ')
                    : 'unknown'}
                </p>
                <p className={style.detailSubText}>Wiki:</p>
                <a
                  href={data[idx].wiki}
                  target="_blank"
                  rel="noopener noreferrer">
                  {data[idx].wiki
                    ? data[idx].wiki.replace(/^https?:\/\//, '')
                    : 'n/a'}
                </a>
              </>
            )}
            {page === 'planets' && (
              <>
                <p className={style.detailSubText}>Rotation period:</p>
                <p>{data[idx].rotation_period}</p>
                <p className={style.detailSubText}>Orbital period:</p>
                <p>{data[idx].orbital_period}</p>
                <p className={style.detailSubText}>Diameter:</p>
                <p>{data[idx].diameter}</p>
                <p className={style.detailSubText}>Climate:</p>
                <p>{data[idx].climate}</p>
                <p className={style.detailSubText}>Gravity:</p>
                <p>{data[idx].gravity}</p>
                <p className={style.detailSubText}>Terrain:</p>
                <p>{data[idx].terrain}</p>
                <p className={style.detailSubText}>Surface water:</p>
                <p>{data[idx].surface_water}</p>
                <p className={style.detailSubText}>Population:</p>
                <p>{data[idx].population}</p>
                <p className={style.detailSubText}>Residents:</p>
                <p>{data[idx].residents.map((item) => item.name).join(', ')}</p>
                <p className={style.detailSubText}>Films:</p>
                <p>{data[idx].films.map((item) => item.name).join(', ')}</p>
              </>
            )}
            {page === 'species' && (
              <>
                <p className={style.detailSubText}>Classification:</p>
                <p>{data[idx].classification}</p>
                <p className={style.detailSubText}>Designation:</p>
                <p>{data[idx].designation}</p>
                <p className={style.detailSubText}>Average height:</p>
                <p>{data[idx].average_height}</p>
                <p className={style.detailSubText}>Average lifespan:</p>
                <p>{data[idx].average_lifespan}</p>
                <p className={style.detailSubText}>Homeworld:</p>
                <p>{data[idx].homeworld[0].name}</p>
                <p className={style.detailSubText}>Language:</p>
                <p>{data[idx].language}</p>
                <p className={style.detailSubText}>People:</p>
                <p>{data[idx].people.map((item) => item.name).join(', ')}</p>
                <p className={style.detailSubText}>Films:</p>
                <p>{data[idx].films.map((item) => item.name).join(', ')}</p>
              </>
            )}
            {page === 'vehicles' && (
              <>
                <p className={style.detailSubText}>Model:</p>
                <p>{data[idx].model}</p>
                <p className={style.detailSubText}>Manufacturer:</p>
                <p>{data[idx].manufacturer}</p>
                <p className={style.detailSubText}>Class:</p>
                <p>{data[idx].class}</p>
                <p className={style.detailSubText}>Max speed:</p>
                <p>{data[idx].max_atmosphere_speed}</p>
                <p className={style.detailSubText}>Crew:</p>
                <p>{data[idx].crew}</p>
                <p className={style.detailSubText}>Passengers:</p>
                <p>{data[idx].passengers}</p>
              </>
            )}
            {page === 'starships' && (
              <>
                <p className={style.detailSubText}>Model:</p>
                <p>{data[idx].model}</p>
                <p className={style.detailSubText}>Manufacturer:</p>
                <p>{data[idx].manufacturer}</p>
                <p className={style.detailSubText}>Class:</p>
                <p>{data[idx].starship_class}</p>
                <p className={style.detailSubText}>Length:</p>
                <p>{data[idx].length}</p>
                <p className={style.detailSubText}>Max speed:</p>
                <p>{data[idx].max_atmosphering_speed}</p>
                <p className={style.detailSubText}>Hyperdrive rating:</p>
                <p>{data[idx].hyperdrive_rating}</p>
                <p className={style.detailSubText}>Crew:</p>
                <p>{data[idx].crew}</p>
                <p className={style.detailSubText}>Cost:</p>
                <p>{data[idx].cost_in_credits}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
