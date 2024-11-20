import { useContext } from "react"
import { FaRegEdit } from "react-icons/fa"
import { AuthContext } from "../Provider/AuthProvider"

const Profile = () => {
    const {user,logout} = useContext(AuthContext);
    // const {displayName,email,photoURL} = user

    const handleLogOut = () => {
        logout()
    }
  return (
    <div className='flex flex-col items-center bg-white shadow-lg mx-auto mt-10 p-6 rounded-lg max-w-md'>
      <div className='flex justify-end mb-4 w-full text-3xl'>
        <button className='mr-2 bt'><FaRegEdit></FaRegEdit></button>
      </div>
      
      <img
        className='shadow-md mb-4 rounded-full w-32 h-32'
        src={user && user?.photoURL}
        alt={user && user?.displayName}
      />
      <h2 className='mb-2 font-semibold text-2xl'>{user && user?.displayName}</h2>
      <p className='mb-4 text-gray-600'>{user && user?.email}</p>
      
      <div className='mt-4 w-full'>
        <h3 className='mb-2 font-semibold text-xl'>Profile Information</h3>
        <div className='mb-2 text-left'>
          <span className='text-gray-500'>Username:</span>
          <span className='ml-2 text-gray-700'>{user && user?.displayName}</span>
        </div>
        {/* <div className='mb-2 text-left'>
          <span className='text-gray-500'>Email:</span>
          <span className='ml-2 text-gray-700'>{}</span>
        </div> */}
        <div className='mb-2 text-left'>
          <span className='text-gray-500'>Address:</span>
          <span className='ml-2 text-gray-700'>123 Main St, Anytown, USA</span>
        </div>
      </div>
      <button onClick={handleLogOut} className="mt-8 w-full font-bold text-red-500 text-xl btn btn-neutral">Log Out</button>
    </div>
  )
}

export default Profile
