import { useEffect, useState } from 'react'
import BrandSaleCard from './BrandSaleCard'

const BrandsOnSale = () => {
  const [avilableBrand, setAvailableBrand] = useState([])

  useEffect(() => {
    fetch('discountCouponInfo.json')
      .then(res => res.json())
      .then(data => setAvailableBrand(data))
  }, [])

  const brandOnSale = avilableBrand.filter(brand => brand.isSaleOn)

  return (
    <div className='lg:hero'>
      <div className='flex justify-center items-center p-0 min-h-screen text-center hero-content'>
        <div className='max-w-full'>
          <div className='mx-auto w-10/12 lg:w-9/12'>
            <h1 className='my-7 font-bold text-xl lg:text-3xl'>
              Exclusive Deals from Your Favorite Brands
            </h1>
            <p className='py-2'>
              Discover unbeatable discounts from leading brands. Shop now to
              save big on top products. Each card showcases the brand's logo,
              name, category, and the total number of available coupons. Don't
              miss out on these limited-time offers!
            </p>
          </div>
          <h1 className='my-5 font-bold text-red-500 text-2xl text-center'>Offer's is going on !!!</h1>
          <div className='space-x-4 bg-gray-300 my-5 p-4 rounded-box max-w-xs lg:max-w-md carousel carousel-center'>
            
            {
                brandOnSale.map(branndCard =>  <BrandSaleCard key={branndCard.id} data={branndCard}></BrandSaleCard>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandsOnSale



{/* <div className="space-x-4 bg-neutral p-4 rounded-box max-w-md carousel carousel-center">
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="rounded-box" />
  </div>
</div> */}
