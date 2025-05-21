import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'

const CouponCard = ({ coupon, brand }) => {
  const handleCopy = () => {
    toast.success('🎉 Copied to clipboard!', {
      position: "top-center",
      autoClose: 2000,
      style: { 
        background: '#4BB543',
        color: 'white',
        fontWeight: 'bold'
      }
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-shadow duration-300"
    >
      {/* Brand Header */}
      <div className="flex items-center bg-gray-50 p-4 border-b">
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="mr-3 rounded-full w-10 h-10 object-contain"
        />
        <div>
          <h3 className="font-bold text-gray-800">{brand.name}</h3>
          <p className="text-gray-500 text-sm">{brand.category}</p>
        </div>
      </div>

      {/* Coupon Content */}
      <div className="p-6">
        {/* Coupon Type Badge */}
        <span className="inline-block bg-blue-100 mb-4 px-3 py-1 rounded-full font-semibold text-blue-600 text-xs">
          {coupon.coupon_type.toUpperCase()}
        </span>

        {/* Coupon Code */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 mb-6 p-4 rounded-lg text-center">
          <p className="mb-2 text-white/90 text-sm">Use this code at checkout</p>
          <div className="flex justify-center items-center space-x-3">
            <span className="font-bold text-white text-3xl tracking-wider">
              {coupon.coupon_code}
            </span>
            <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </CopyToClipboard>
          </div>
        </div>

        {/* Coupon Details */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center">
            <svg className="mr-2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Expires: {coupon.expiry_date}</span>
          </div>

          <div className="flex items-start">
            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600">{coupon.condition}</p>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href={brand.shop_link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-blue-600 hover:from-blue-700 to-blue-500 hover:to-blue-600 shadow-sm hover:shadow-md mt-6 py-3 rounded-lg w-full font-semibold text-white text-center transition-all"
        >
          Shop Now →
        </a>
      </div>

      <ToastContainer />
    </motion.div>
  )
}

export default CouponCard