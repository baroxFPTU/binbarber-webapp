import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import '@splidejs/react-splide/css'
import { Provider, ReactReduxContext } from 'react-redux'
import store from 'store'
import { AnimatePresence } from 'framer-motion'

//Swiper styles
import 'swiper/css'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/grid'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { history } from 'utils'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <HistoryRouter history={history}>
            <App />
          </HistoryRouter>
        </AnimatePresence>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
