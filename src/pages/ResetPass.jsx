import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { toast, ToastContainer } from 'react-toastify'

const ResetPass = () => {
  const { forgetPassword } = useContext(AuthContext)
  const handleResetPass = e => {
    e.preventDefault()
    const email = e.target.email.value

    forgetPassword(email)
      .then(() => {
        alert('Password reset mail is send.')
      })
      .catch(() => {
        // console.log(res)
        toast('Somthing Wrong')
      })
  }
  return (
    <div className='py-14'>
        <h1 className='my-5 font-semibold text-center text-lg'>Enter you e-mail for reset your password.</h1>
      <div className='bg-base-100 shadow-2xl mx-auto w-full max-w-md card shrink-0'>
        <div className='card-body'>
          <form onSubmit={handleResetPass}>
            <label className='text-center label'>
              <span className='my-7 text-xl label-text'>
                Reset Your Password :
              </span>
            </label>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email..'
                className='input-bordered input'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button className='text-xl btn btn-primary'>Reset</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default ResetPass
