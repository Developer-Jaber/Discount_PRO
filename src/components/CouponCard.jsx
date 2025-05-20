import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast, ToastContainer } from 'react-toastify'

const CouponCard = ({ coupon, brand }) => {
  const handleCopy = () => {
    toast.success('Coupon code copied!')
  }

  console.log(coupon)
  return (
    <div className='bg-white shadow-blue-300 shadow-lg mt-10 p-4 rounded-lg text-slate-700 card'>
      <h1 className='font-bold text-3xl text-center underline'>Discount !!!</h1>
      <h3 className='my-5 mb-2 font-semibold text-2xl text-red-500 lg:text-4xl'>
        <span className='mr-5 font-bold text-sm lg:text-lg'>
          Use This Code:
        </span>
        {coupon.coupon_code}
      </h3>
      <p className='mb-4'>{coupon.description}</p>
      <p className='mb-4'>Expires: {coupon.expiry_date}</p>
      <p className='mb-4'>Conditions: {coupon.condition}</p>
      <p className='mb-4'>Type: {coupon.coupon_type}</p>
      <div className='flex justify-between items-center'>
        <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
          <button className='btn btn-primary'>Copy Code</button>
        </CopyToClipboard>
        {/* <a
          href={coupon.shop_link}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-secondary'
        >
          Use Now
        </a> */}

        <a className='btn btn-secondary' target='_blank' href={`${brand.shop_link}`}>
          Use Now
        </a>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default CouponCard
