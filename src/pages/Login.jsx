import { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { VscGithubInverted } from 'react-icons/vsc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import 'animate.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {
  const { loginUser, googleAuthentication } = useContext(AuthContext)
  const [error, setError] = useState({})
  const [showPass,setShowPass] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const handleLogin = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const email = form.get('email')
    const password = form.get('password')

    loginUser(email, password)
      .then((reasul) => {
        toast('You are succesfully loged in..')
        navigate(location?.state ? location.state : '/')
      })
      .catch(err => {
        setError({ ...error, login: err.code })
      })
  }

  const handleGoogleAuth = () => {
    googleAuthentication()
      .then((resut) => {
        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => {
        toast('Somthing worng..!!')
      })
  }
  return (
    <div className='py-14'>
      <h1 className='mb-8 font-bold text-4xl text-center animate__animated animate__bounce'>
        Welcome Back, Savvy Shopper! Log In Now
      </h1>
      <div className='bg-base-100 shadow-2xl mx-auto w-full max-w-md card shrink-0'>
        <div className='card-body'>
          <form onSubmit={handleLogin}>
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
            <div className='relative form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type={showPass? 'text' : 'password'}
                placeholder='password'
                name='password'
                className='input-bordered input'
                required
              />
              <button onClick={()=>{setShowPass(!showPass)}} className='top-12 right-2 absolute btn btn-xs'>
                {
                  showPass? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
              </button>
              {error.login && <label className='text-red-500 label'>{error.login}</label>}
              <label className='label'>
                <Link
                  to='/login_register/reset_password'
                  className='label-text-alt link link-hover'
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='text-xl btn btn-primary'>Login</button>
            </div>
          </form>
          <p className='text-center'>Or</p>

          {/* Google Authentication Login button */}
          <div className='form-control mt-4'>
            <button onClick={handleGoogleAuth} className='gap-3 shadow-md btn'>
              <span>Login with Google</span>
              <span className='text-2xl'>
                <FcGoogle></FcGoogle>
              </span>
            </button>
          </div>

          {/* gitHub Authentication Login button */}
          <div className='form-control mt-4'>
            <button className='gap-3 shadow-md btn'>
              <span>Login with Github</span>
              <span className='text-2xl'>
                <VscGithubInverted></VscGithubInverted>
              </span>
            </button>
          </div>

          {/* Navlink fo signup page */}
          {/* <label className='label'>
            <Link
              to='/login_register/register'
              href='#'
              className='label-text-alt link link-hover'
            >
              Sign Up
            </Link>
          </label> */}
          <label className='label'>
            <Link
              to='/login_register/register'
              href='#'
              className='label-text-alt link link-hover'
            >
              Sign Up
            </Link>
          </label>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Login
