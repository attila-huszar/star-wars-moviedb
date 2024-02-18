import style from '../styles/Footer.module.css'

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.text}>
        <div className={style.date}>
          <p>Attila Huszár</p>
          <p className={style.copyleft}></p>
          <p>{new Date().getFullYear()}</p>
        </div>
        <div className={style.links}>
          <a
            href="https://attilah.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
