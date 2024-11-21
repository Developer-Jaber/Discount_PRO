// import { Card } from '@headlessui/react';

const BrandSaleCard = ({ data }) => {
  const {brand_name,brand_logo,coupons,category} = data
  return (
    <div className='bg-slate-500 rounded-lg text-white carousel-item'>
      <div className='shadow-lg rounded max-w-72 overflow-hidden'>
        <img
          className='mx-auto mt-3 rounded-lg w-40 h-40 object-cover'
          src={brand_logo}
          alt='Image'
        />
        <div className='px-6 py-4'>
          <h1 className='mb-2 font-bold text-xl'>Brand Name : {brand_name}</h1>
          <p className='text-base'>Coupons Available : {coupons.length}</p>
        </div>
        <div className='px-6 pt-1 pb-4'>
          <h1>Category : {category}</h1>
        </div>
      </div>
    </div>
  )
}

export default BrandSaleCard
