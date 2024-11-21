import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const TopBrand = () => {
  return (
    <div className='my-0 lg:hero'>
      <div className='text-center lg:hero-content'>
        <div className='max-w-full'>
          <div className='mx-auto w-full lg:w-9/12'>
            <h1 className='my-7 font-bold text-xl lg:text-4xl'>
              Discover the Best Deals from Leading Brands
            </h1>
            <p className='py-2'>
              Browse through our selection of top brands to find the best
              discount coupons. Whether you're shopping for electronics,
              fashion, beauty products, or home essentials, our curated
              collection ensures you get the best value for your money. Save big
              with exclusive offers and enjoy a seamless shopping experience
              with Discount PRO.
            </p>
          </div>

          <div className='my-5 p-5'>
            <Link to='/brands'>
              <Marquee pauseOnHover={true}>
                <img
                  className='mx-10 w-48'
                  src='https://i.ibb.co/MMnjbmr/Shope-Mart.png'
                  alt=''
                />
                <img
                  className='mx-10 w-48'
                  src='https://i.ibb.co/nfBPYp3/Home-Essentials.jpg'
                  alt=''
                />
                <img
                  className='mx-10 w-48'
                  src='https://i.ibb.co/kXNgKTC/Fashion-Hub.png'
                  alt=''
                />
                <img
                  className='mx-10 w-48'
                  src='https://i.ibb.co/Lr91rbQ/Grocery-Deals.png'
                  alt=''
                />
                <img
                  className='mx-10 w-48'
                  src='https://i.ibb.co/zRJVKCp/Beauty-Store.jpg'
                  alt=''
                />
              </Marquee>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBrand
