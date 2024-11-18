import Navber from './Navber'

const Header = () => {
  return (
    <header>
      <section className='bg-base-200 mx-auto pt-8 w-10/12'>
        <div className='hero'>
          <div className='text-center hero-content'>
            <div className='max-w-3xl'>
              <h1 className='font-bold text-4xl'>Your Ultimate Coupon Hub!</h1>
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
