import { useLocation, useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchData } from '../api/fetch'
import { useDispatch, useSelector } from 'react-redux'
import { DataFields } from '../components/DataFields'
import { LoadPending } from '../components/LoadPending'
import { LoadError } from '../components/LoadError'
import { arabicToRoman } from '../utils/textTransforms'
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
            <DataFields data={data[idx]} component={'detail'} page={page} />
          </div>
        </div>
      </div>
    </article>
  )
}
