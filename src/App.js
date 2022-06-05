import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import Home from 'pages/Home'
import Me from 'pages/Me'
import NotFound from 'pages/NotFound'
import Voucher from 'pages/Voucher'
import BookingLayout from 'containers/layouts/BookingLayout'
import DefaultLayout from 'containers/layouts/DefaultLayout'
import BookingList from 'components/booking/BookingList/BookingList'
import BookingDetail from 'components/booking/BookingDetail/BookingDetail'
import Wrapper from 'containers/layouts/Wrapper'

function App() {
  const [title, setTitle] = useState()

  return (
    <HelmetProvider>
      <Helmet>
        <title>BinBarBer</title>
      </Helmet>
      <div className="app-master">
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="/bookings">
              <Route path="" element={<BookingList/>}/>
            </Route>
            <Route path="/vouchers" element={<Voucher/>}/>
            <Route path="/me" element={<Me/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
          <Route path="/bookings/:id" element={<BookingLayout/>}>
            <Route path="" element={<BookingDetail/>}/>
          </Route>
        </Routes>
      </div>
    </HelmetProvider>
  )
}

export default App
