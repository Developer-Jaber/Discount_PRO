import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const LoginSignInPageLayout = () => {
  return (
    <div className="font-poppins">
      <header className='bg-base-200'>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className='bg-neutral'>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default LoginSignInPageLayout
