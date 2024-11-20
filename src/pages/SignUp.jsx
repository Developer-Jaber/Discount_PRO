import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

const SignUp = () => {
  const {createUser} = useContext(AuthContext);

  const handleCreateUser = (e) => {
      e.preventDefault();
      const form = new FormData(e.target)
      // const name = form.get('displayName')
      // const photoUrl = form.get('photoUrl')
      const email = form.get('email')
      const password = form.get('password')

      createUser(email,password)
      .then(result=>{
        console.log(result);
      })
      .catch(err=>{
        console.log(err)
      })
      console.log(email,password);
  }
  return (
    <div>
      <h1 className='mb-8 font-bold text-4xl text-center'>
        Welcome to Discount PRO – Register to Start Saving!
      </h1>
      <div className='bg-base-100 shadow-2xl mx-auto w-full max-w-md card shrink-0'>
        <form onSubmit={handleCreateUser} className='card-body'>
          {/* <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              name='displayName'
              placeholder='Enter Your Name'
              className='input-bordered input'
              required
            />
          </div> */}
          {/* <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Photo URL</span>
            </label>
            <input
              type='text'
              name='photoUrl'
              placeholder='Enter Your Photo URL'
              className='input-bordered input'
              required
            />
          </div> */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter Your email'
              className='input-bordered input'
              required
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='password'
              className='input-bordered input'
              required
            />
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Sign Up</button>
          </div>

          <label className='label'>
            <Link
              to='/login_register'
              className='label-text-alt link link-hover'
            >
              Alrady have an account?
            </Link>
          </label>
        </form>
      </div>
    </div>
  )
}

export default SignUp
