import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='font-poppins'>
      <header className='bg-base-200'>
        <Header></Header>
      </header>
      <Outlet></Outlet>
      <footer className='bg-neutral'>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default MainLayout
