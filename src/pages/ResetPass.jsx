import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const ResetPass = () => {
  const { forgetPassword } = useContext(AuthContext)
  const handleResetPass = e => {
    e.preventDefault()
    const email = e.target.email.value
    console.log(email)

    forgetPassword(email)
      .then(() => {
        alert('Password reset mail is send.')
      })
      .catch(res => {
        console.log(res)
      })
  }
  return (
    <div className='bg-base-100 shadow-2xl mx-auto w-full max-w-md card shrink-0'>
      <div className='card-body'>
        <form onSubmit={handleResetPass}>
          <label className='text-center label'>
            <span className='my-7 text-xl label-text'>Reset Your Password :</span>
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
  )
}

export default ResetPass
