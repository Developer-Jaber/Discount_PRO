import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdateProfile = () => {
    const navigate = useNavigate()
    const {updateprofile} = useContext(AuthContext)
     const handleEditProfie = (e) => {
        e.preventDefault()
        const email = e.target.displayName.value
        const photo = e.target.photoUrl.value

        updateprofile({email:email,photoURL:photo})
        .then(()=>{
            alert('Profile Information Updated..')
            navigate('/login_register/my_profile')
        })
        .catch(()=>{
            // console.log(err)
            toast('Somthing Went Worng...!')
        })

    }
    return (
        <div>
      <h1 className='mb-8 font-bold text-4xl text-center'>
        You Can Update Your Information
      </h1>
      <div className='bg-base-100 shadow-2xl mx-auto w-full max-w-md card shrink-0'>
        <form onSubmit={handleEditProfie} className='card-body'>
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

          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Update</button>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default UpdateProfile;