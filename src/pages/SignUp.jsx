import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import { toast, ToastContainer } from 'react-toastify'

const SignUp = () => {
  const { createUser, updateprofile } = useContext(AuthContext)
  const [error, setError] = useState({})
  const [errorMassage, setErrorMassage] = useState('')
  const [succes, setSucces] = useState({})

  const handleCreateUser = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('displayName')
    // user name validation
    if (name.length < 5) {
      setError({ ...error, name: 'name must be 5 carecter long.' })
      return
    }
    const photoUrl = form.get('photoUrl')
    const email = form.get('email')
    const password = form.get('password')
    // password validation
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const isLongEnough = password.length >= 6
    
    if(!hasUpperCase) {
      setErrorMassage('password should be minimum 1 uppercase carecter.')
      return
    }else if(!hasLowerCase){
      setErrorMassage('password should be minimum 1 Lowercase carecter.')
      return
    }else if(!isLongEnough){
      setErrorMassage('password should be minimum 6 carecter long.')
      return
    }

    createUser(email, password)
      .then(result => {
        toast('You are succesfully sign up...')
        updateprofile({ displayName: name, photoURL: photoUrl })
      })
      .catch(() => {
        return errorMassage
      })
    console.log(email, password)
  }
  return (
    <div className='py-14'>
      <h1 className='mb-8 font-bold text-4xl text-center'>
        Welcome to Discount PRO – Register to Start Saving!
      </h1>
      <div className='bg-base-100 shadow-2xl mx-auto w-full max-w-md card shrink-0'>
        <form onSubmit={handleCreateUser} className='card-body'>
          <div className='form-control'>
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
            {error.name && (
              <label className='label'>
                <span className='text-red-500 label-text'>{error.name}</span>
              </label>
            )}
          </div>
          <div className='form-control'>
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
          </div>
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

          {errorMassage && <p className='text-red-500'>{errorMassage}</p>}

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
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default SignUp
