import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='bg-base-100 shadow-2xl mx-auto w-full max-w-md card shrink-0'>
      <form onSubmit="" className='card-body'>
        {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="displayName" placeholder="Name" className="input-bordered input" required />
                </div> */}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            name='email'
            placeholder='email'
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
          <Link to='/login_register' className='label-text-alt link link-hover'>
            Alrady have an account?
          </Link>
        </label>
      </form>
    </div>
  )
}

export default SignUp
