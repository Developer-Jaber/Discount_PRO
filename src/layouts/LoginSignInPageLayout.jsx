import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const LoginSignInPageLayout = () => {
  return (
    <div>
      <header className='bg-base-200'>
        <Header></Header>
      </header>
      <main className='py-10'>
        <Outlet></Outlet>
      </main>
      <footer className='bg-neutral'>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default LoginSignInPageLayout
