import Header from 'components/common/Header/Header'
import MainNavigation from 'components/navigation/MainNavigation/MainNavigation'
import Home from 'pages/Home'
import ManageBooking from 'pages/ManageBooking'
import Me from 'pages/Me'
import Voucher from 'pages/Voucher'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="app-master">
      <Header/>
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/manage-booking" element={<ManageBooking/>}/>
          <Route path="/vouchers" element={<Voucher/>}/>
          <Route path="/me" element={<Me/>}/>
        </Routes>
      </main>
      <MainNavigation/>
    </div>
  )
}

export default App
