import PropTypes from 'prop-types'
import style from '../styles/Loading.module.css'
import IconError from '../assets/svg/error.svg?react'

export function LoadError({ error = 'Something went wrong' }) {
  return (
    <div className={style.warn}>
      <IconError className={style.icon} />
      <div>{error}</div>
    </div>
  )
}

LoadError.propTypes = {
  error: PropTypes.string.isRequired,
}
