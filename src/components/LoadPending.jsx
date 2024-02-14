import PropTypes from 'prop-types'
import style from '../styles/Loading.module.css'
import IconPending from '../assets/svg/pending.svg?react'

export function LoadPending({ page }) {
  return (
    <div className={style.warn}>
      <IconPending className={style.icon} />
      <div>Loading {page}...</div>
    </div>
  )
}

LoadPending.propTypes = {
  page: PropTypes.string,
}

LoadPending.defaultProps = {
  page: 'Loading...',
}
