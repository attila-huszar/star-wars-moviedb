import { useNavigate } from 'react-router-dom'
import style from '../styles/NotFound.module.css'
import img404 from '../assets/svg/404.svg'

export function NotFound() {
  const navigate = useNavigate()

  function handleGoBack() {
    const hasPreviousPage = window.history.length > 2
    hasPreviousPage ? navigate(-1) : navigate('/episodes')
  }

  return (
    <div className={style.notFound}>
      <button className={style.button404} onClick={handleGoBack}>
        <span className={style.span404}>4</span>
        <img src={img404} className={style.img404} alt="404" />
        <span className={style.span404}>4</span>
      </button>
      <p>Page Not Found</p>
    </div>
  )
}
