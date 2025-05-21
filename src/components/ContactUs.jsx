import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl mx-auto rounded-2xl max-w-6xl overflow-hidden"
      >
        <div className="flex lg:flex-row flex-col">
          {/* Contact Form */}
          <div className="p-12 w-full lg:w-1/2">
            <h2 className="mb-8 font-bold text-gray-800 text-4xl">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer px-4 py-3 border-gray-300 border-b-2 focus:border-blue-500 outline-none w-full"
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <label 
                  htmlFor="name" 
                  className="top-3 peer-focus:top-0 peer-placeholder-shown:top-3 left-4 absolute text-gray-500 peer-focus:text-blue-500 peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-placeholder-shown:text-base transition-all"
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="peer px-4 py-3 border-gray-300 border-b-2 focus:border-blue-500 outline-none w-full"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label 
                  htmlFor="email" 
                  className="top-3 peer-focus:top-0 peer-placeholder-shown:top-3 left-4 absolute text-gray-500 peer-focus:text-blue-500 peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-placeholder-shown:text-base transition-all"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  className="peer px-4 py-3 border-gray-300 border-b-2 focus:border-blue-500 outline-none w-full h-32 resize-none"
                  placeholder=" "
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <label 
                  htmlFor="message" 
                  className="top-3 peer-focus:top-0 peer-placeholder-shown:top-3 left-4 absolute text-gray-500 peer-focus:text-blue-500 peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-placeholder-shown:text-base transition-all"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-200 px-6 py-3 rounded-lg w-full font-medium text-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-gray-100 to-purple-100 p-12 w-full lg:w-1/2 text-black">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center h-full"
            >
              <h3 className="mb-8 font-bold text-3xl">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="opacity-90">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="opacity-90">support@branddeals.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="opacity-90">123 Brand Street, Deal City, DC 45678</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-white/20 border-t">
                <h4 className="mb-4 font-semibold text-lg">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        Add respective social media icons here
                      </svg>
                    </motion.a>
                  ))} */}
                  <FaFacebook className="w-7 h-7 cursor-pointer"></FaFacebook>
                  <FaGithub className="w-7 h-7 cursor-pointer"></FaGithub>
                  <FaInstagram className="w-7 h-7 cursor-pointer"></FaInstagram>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="top-0 left-0 absolute w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200/30 rounded-full"
            style={{
              width: Math.random() * 50 + 50,
              height: Math.random() * 50 + 50,
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default ContactUs