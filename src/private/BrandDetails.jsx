import { Link, useLoaderData,  useParams } from 'react-router-dom'
import CouponCard from '../components/CouponCard'
import { FaStar } from 'react-icons/fa'

const BrandDetails = () => {
  // const navigate = useNavigate()
  // const handleNavigate = () => {
  //   navigate('/brands')
  // }
  const { id } = useParams()

  const data = useLoaderData()

  const brand = data.find(brand => brand.id === id)

  return (
    <div className='mx-auto'>
      <div className='mx-auto py-10 container'>
        <div className='flex flex-col items-center mb-8'>
          <img
            src={brand?.brand_logo}
            alt={`${brand?.brand_name} logo`}
            className='mb-4 rounded-lg w-24 h-24'
          />
          <h1 className='mb-2 font-bold text-3xl'>{brand?.brand_name}</h1>
          <div className='flex items-center text-yellow-500'>
            <FaStar />
            <span className='ml-2'>{brand?.rating}</span>
          </div>
          <p className='my-4 font-semibold text-center text-xl lg:text-3xl'>{brand?.description}</p>
        </div>
        <div className='mx-auto w-11/12 lg:w-8/12'>
          <div className='gap-6 lg:grid grid-cols-2'>
            {brand?.coupons.map((coupon, idnx) => (
              <CouponCard key={idnx} coupon={coupon} brand={brand}></CouponCard>
            ))}
          </div>
        </div>
        <Link
          to='/brands'
          className='flex bg-blue-400 mx-auto my-14 w-40 text-white btn'
        >
          See More Brand
        </Link>
      </div>
    </div>
  )
}

export default BrandDetails
