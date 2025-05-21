// import { Card } from '@headlessui/react';

const BrandSaleCard = ({ data }) => {
  const {brand_name,brand_logo,coupons,category} = data
  return (
    <div className='bg-slate-500 rounded-lg text-white carousel-item'>
      <div className='shadow-lg rounded max-w-80 overflow-hidden'>
        <img
          className='mx-auto mt-3 rounded-lg w-40 h-40 object-cover'
          src={brand_logo}
          alt='Image'
        />
        <div className='px-3 py-4'>
          <h1 className='mb-2 font-bold text-xl'>Brand Name : {brand_name}</h1>
          <p className='text-base'>Coupons Available : <span className="mx-3 font-bold text-red-400 text-2xl">{coupons.length}</span></p>
        </div>
        <div className='px-6 pt-1 pb-4'>
          <h1>Category : <span className="mx-3 font-bold text-red-400 text-2xl">{category}</span></h1>
        </div>
      </div>
    </div>
  )
}

export default BrandSaleCard
