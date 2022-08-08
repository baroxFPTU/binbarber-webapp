import DefaultLayout from 'containers/layouts/DefaultLayout'
import React, { Fragment } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'
import { PUBLIC_ROUTES } from 'routes'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'components/common/Error/Error'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>BinBarBer</title>
      </Helmet>
      <div className='app-master'>
        <ErrorBoundary FallbackComponent={Error}>
          <Routes>
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
        </ErrorBoundary>
      </div>
    </HelmetProvider>
  )
}

export default App
