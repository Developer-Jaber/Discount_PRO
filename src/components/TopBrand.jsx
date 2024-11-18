import Marquee from 'react-fast-marquee'

const TopBrand = () => {
  return (
    <div className='my-0 hero'>
      <div className='text-center hero-content'>
        <div className='max-w-full'>
          <div className='mx-auto w-9/12'>
            <h1 className='font-bold text-3xl'>
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
            <Marquee pauseOnHover={true}>
                <img className='mx-10 w-48' src="https://i.ibb.co/MMnjbmr/Shope-Mart.png" alt="" />
                <img className='mx-10 w-48' src="https://i.ibb.co/nfBPYp3/Home-Essentials.jpg" alt="" />
                <img className='mx-10 w-48' src="https://i.ibb.co/kXNgKTC/Fashion-Hub.png" alt="" />
                <img className='mx-10 w-48' src="https://i.ibb.co/Lr91rbQ/Grocery-Deals.png" alt="" />
                <img className='mx-10 w-48' src="https://i.ibb.co/zRJVKCp/Beauty-Store.jpg" alt="" />
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBrand
