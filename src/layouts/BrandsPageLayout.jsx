
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


const BrandsPageLayout = () => {
  return (
    <div className="font-poppins">
      <header className='bg-base-200'>
        <Header></Header>
      </header>
      <main className='min-h-screen'>
          <Outlet></Outlet>
      </main>
      <footer className='bg-gray-800'>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default BrandsPageLayout
