import { CopyToClipboard } from 'react-copy-to-clipboard';



const CouponCard = ({ coupon }) => {
  const handleCopy = () => {
    toast.success('Coupon code copied!')
  }
  return (
    <div className='bg-white shadow-lg p-4 rounded-lg card'>
      <h1 className='text-3xl text-center underline'>Discount !!!</h1>
      <h3 className='my-5 mb-2 font-semibold text-4xl text-red-500'><span className='mr-5 font-bold text-lg'>Use This Code:</span>{coupon.coupon_code}</h3>
      <p className='mb-4'>{coupon.description}</p>
      <p className='mb-4'>Expires: {coupon.expiry_date}</p>
      <p className='mb-4'>Conditions: {coupon.condition}</p>
      <p className='mb-4'>Type: {coupon.coupon_type}</p>
      <div className='flex justify-between items-center'>
        <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
          <button className='btn btn-primary'>Copy Code</button>
        </CopyToClipboard>
        <a
          href={coupon.shop_link}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-secondary'
        >
          Use Now
        </a>
      </div>
    </div>
  )
}

export default CouponCard
