import DefaultLayout from 'components/layouts/DefaultLayout'
import React, { Fragment } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { PUBLIC_ROUTES } from 'routes'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'components/common/Error/Error'
import { useSelector } from 'react-redux'
import { selectPageData } from 'features/common/commonSlice'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  const pageData = useSelector(selectPageData)

  return (
    <HelmetProvider>
      <Helmet>
        <title>BinBarber | {pageData.title || ''}</title>
        <meta name='description' content={`Binbarber - ${pageData.description}`} />
      </Helmet>
      <div className='app-master'>
        <ErrorBoundary FallbackComponent={Error}>
          <AnimatePresence exitBeforeEnter initial={true} custom={{ mode: 'wait' }}>
            <Routes location={location} key={location.pathname}>
              {PUBLIC_ROUTES.map((route, index) => {
                const Page = route.element
                let Layout = DefaultLayout
                if (route.layout) {
                  Layout = route.layout
                } else if (route.layout === null) {
                  Layout = Fragment
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page {...route.props} />
                      </Layout>
                    }
                  />
                )
              })}
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </div>
    </HelmetProvider>
  )
}

export default App
