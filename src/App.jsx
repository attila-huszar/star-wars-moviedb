import { Provider } from 'react-redux'
import { store } from './store/store'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routes.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import style from './styles/App.module.css'

function App() {
  const routeElements = useRoutes(routes)

  return (
    <Provider store={store}>
      <Header />
      <main className={style.main}>{routeElements}</main>
      <Footer />
    </Provider>
  )
}

export default App
