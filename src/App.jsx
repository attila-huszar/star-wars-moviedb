import { Provider } from 'react-redux'
import { store } from './store/store'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routes'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
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
