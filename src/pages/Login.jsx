
import { FcGoogle } from 'react-icons/fc'
import { VscGithubInverted } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-base-100 shadow-2xl mx-auto w-full max-w-md card shrink-0'>
      <div className='card-body'>
        <form>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
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
              placeholder='password'
              className='input-bordered input'
              required
            />
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='text-xl btn btn-primary'>Login</button>
          </div>
        </form>
        <p className='text-center'>Or</p>

        {/* Google Authentication Login button */}
        <div className='form-control mt-4'>
          <button
            onClick=""
            className='gap-3 shadow-md btn'
          >
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
  )
}

export default Login
