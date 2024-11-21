import { useContext } from 'react'
import Navber from './Navber'
import { AuthContext } from '../Provider/AuthProvider'

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <header>
      <section className='bg-base-200 mx-auto pt-8 w-full lg:w-10/12'>
        <div className='hero'>
          <div className='text-center hero-content'>
            <div className='max-w-3xl'>
              {
                user && <h1 className='mb-10 font-bold text-blue-400 text-xl md:text-5xl animate__animated animate__heartBeat'>Welcome {user.displayName} !!</h1>
              }
              <h1 className='font-bold text-xl md:text-4xl'>Your Ultimate Coupon Hub!</h1>
              <p className='pt-4'>
                Discover and collect the best discount coupons for your favorite
                e-commerce stores in Bangladesh. Sign up now to save big on top
                brands with ease. Copy codes with a click and start saving
                today!
              </p>
            </div>
          </div>
        </div>
        <nav>
          <Navber></Navber>
        </nav>
      </section>
    </header>
  )
}

export default Header
