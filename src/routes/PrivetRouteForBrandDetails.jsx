import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loding from '../pages/Loding'

const PrivetRouteForBrandDetails = ({ children }) => {
    const location = useLocation()
    // console.log(location)
  const { user, loding } = useContext(AuthContext)
  if(loding){
    return <Loding></Loding>
  }
  if (user) {
    return children
  }
  return <Navigate state={location.pathname} to='/login_register'></Navigate>
}

export default PrivetRouteForBrandDetails
