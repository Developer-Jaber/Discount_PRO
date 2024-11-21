import { useContext } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import 'animate.css';

const Navber = () => {
  const {user} = useContext(AuthContext)
  const link = (
    <>
      <li className='btn-ghost'>
        <Link to='/'>Home</Link>
      </li>
      <li className='btn-ghost'>
        <Link to='/brands'>Brands</Link>
      </li>
      {
        user && <li className='btn-ghost'><Link to='/login_register/my_profile'>My Profile</Link></li>
      }
      <li className='btn-ghost'>
        <Link to='/aboutMe'>About Dev</Link>
      </li>
    </>
  )

  return (
    <div className='bg-base-200 navbar'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='lg:hidden btn btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='z-[1] gap-3 bg-base-100 shadow mt-3 p-2 rounded-box w-52 text-lg dropdown-content menu menu-sm'
          >
            {link}
          </ul>
        </div>
        <a className='font-semibold text-xl lg:text-3xl animate__animated animate__rubberBand btn btn-ghost'>Discount PRO</a>
      </div>
      <div className='lg:flex hidden navbar-center'>
        <ul className='gap-3 px-1 text-lg menu menu-horizontal'>{link}</ul>
      </div>
      <div className='navbar-end'>
        <Link
          to='/login_register'
          className='lg:mx-3 px-3 lg:px-7 py-3 rounded-sm font-bold'
        >
          {
            user && user?.email ? (
              <img className='rounded-full w-12 lg:w-16 h-12 lg:h-16' src={user?.photoURL} alt="" />
            ) : (
              <FaUserCircle className='text-4xl'></FaUserCircle>
            )
          }
        </Link>
      </div>
    </div>
  )
}

export default Navber
