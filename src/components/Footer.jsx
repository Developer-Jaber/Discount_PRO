import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='mx-auto p-4 lg:p-10 w-11/12 text-white footer'>
      <div className='mx-auto mt-10 container'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-4'>
          {/* About Us */}
          <div>
            <h3 className='mb-2 font-bold text-2xl'>About Discount PRO</h3>
            <p className="text-slate-300">
              Discount PRO is your go-to application for finding and using
              discount coupons for popular e-commerce shops in Bangladesh. Save
              money and enjoy shopping with our curated list of coupons.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='mb-2 font-bold text-xl lg:text-2xl'>Quick Links</h3>
            <ul className='p-0 text-slate-300 list-none'>
              <li className='mb-2'>
                <a href='/brands' className='hover:underline'>
                  Brands
                </a>
              </li>
              <li className='mb-2'>
                <a href='/about' className='hover:underline'>
                  About Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='/contact' className='hover:underline'>
                  Contact
                </a>
              </li>
              <li className='mb-2'>
                <a href='/privacy' className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='mb-2 font-bold text-xl lg:text-2xl'>Support</h3>
            <ul className='p-0 text-slate-300 list-none'>
              <li className='mb-2'>
                <a href='/faq' className='hover:underline'>
                  FAQ
                </a>
              </li>
              <li className='mb-2'>
                <a href='/help' className='hover:underline'>
                  Help Center
                </a>
              </li>
              <li className='mb-2'>
                <a href='/terms' className='hover:underline'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className='mb-2 font-bold text-xl lg:text-2xl'>Contact Us</h3>
            <p className="text-slate-300">
              Email:{' '}
              <a
                href='mailto:support@discountpro.com'
                className='hover:underline'
              >
                support@discountpro.com
              </a>
            </p>
            <p className="text-slate-300">
              Phone:{' '}
              <a href='tel:+880123456789' className='hover:underline'>
                +880 123 456 789
              </a>
            </p>
            <div className='mt-4'>
              <h4 className='font-bold text-xl'>Follow Us</h4>
              <div className='flex space-x-4 mt-2 text-3xl'>
                <a
                  href='https://www.facebook.com/JABERHOSSAIN.dev'
                  className='text-white hover:text-gray-400'
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href='https://twitter.com'
                  className='text-white hover:text-gray-400'
                >
                  <FaTwitter></FaTwitter>
                </a>
                <a
                  href='https://instagram.com'
                  className='text-white hover:text-gray-400'
                >
                  <FaInstagram></FaInstagram>
                </a>
                <a
                  href='https://linkedin.com'
                  className='text-white hover:text-gray-400'
                >
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-10 pt-6 border-gray-700 border-t text-center'>
          <p className='text-sm'>
            &copy; 2024 Discount PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
