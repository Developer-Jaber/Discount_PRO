import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const BrandCard = ({ data }) => {
  return (
    <div className='flex justify-between bg-white shadow-lg mx-auto mb-6 p-4 rounded-lg w-9/12 card lg:card-side'>
      <div className='flex items-center mb-4'>
        <img
          src={data?.brand_logo}
          alt={`${data?.brand_name} logo`}
          className='mr-4 w-24 h-24 object-cover'
        />
        <div>
          <h3 className='font-semibold text-xl'>{data.brand_name}</h3>
          <div className='flex items-center text-yellow-500'>
            <FaStar />
            <span className='ml-2'>{data?.rating}</span>
          </div>
        </div>
      </div>
      <p className='mb-4'>{data.description}</p>
      <div className=''>
        <Link to={`/brands/${data?.id}`} className='btn btn-primary'>View Coupons</Link>
        {data.isSaleOn && (
          <div className='mt-5 text-center text-red-500 animate-bounce'>Sale is On!</div>
        )}
      </div>
    </div>
  )
}

export default BrandCard
