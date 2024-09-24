import { Link } from 'react-router-dom'
import { DataFields } from '../components/DataFields'
import { arabicToRoman } from '../utils/textTransforms'
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
          <DataFields data={item} component={'card'} page={page} />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  page: PropTypes.string,
  item: PropTypes.object,
}
