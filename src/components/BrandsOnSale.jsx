import { useEffect, useState } from 'react'
import BrandSaleCard from './BrandSaleCard'

const BrandsOnSale = () => {
  const [availableBrands, setAvailableBrands] = useState([])

  useEffect(() => {
    fetch('discountCouponInfo.json')
      .then(res => res.json())
      .then(data => setAvailableBrands(data))
  }, [])

  const brandsOnSale = availableBrands.filter(brand => brand.isSaleOn)

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="mx-auto px-4 container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-4xl md:text-5xl">
            Exclusive Brand Deals
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg leading-relaxed">
            Discover unbeatable discounts from your favorite brands. Limited-time offers with exclusive coupons - 
            elevate your shopping experience while saving big!
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-red-100 rounded-2xl w-full h-64 -rotate-2 transform" />
          </div>
          
          <div className="relative py-8">
            <div className="flex justify-center mb-8">
              <div className="bg-red-500 shadow-lg px-6 py-2 rounded-full text-white rotate-2 transform">
                <span className="font-bold text-lg animate-pulse">HOT DEALS!</span>
              </div>
            </div>

            <div className="flex px-4 pb-8 overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6">
                {brandsOnSale.map((brand) => (
                  <BrandSaleCard 
                    key={brand.id} 
                    data={brand}
                    className="hover:shadow-xl min-w-[300px] transition hover:-translate-y-2 transform" 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsOnSale