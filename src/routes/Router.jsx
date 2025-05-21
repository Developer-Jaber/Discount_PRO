import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '../Err/ErrorPage'
import BrandsPage from '../pages/BrandsPage'
import BrandDetails from '../private/BrandDetails'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Profile from '../private/Profile'
import PrivetRouteForBrandDetails from './PrivetRouteForBrandDetails'
import PrivetRouteForProfile from './PrivetRouteForProfile'
import ResetPass from '../pages/ResetPass'
import UpdateProfile from '../pages/UpdateProfile'
import 'react-toastify/dist/ReactToastify.css'
import AboutMe from '../pages/AboutMe'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/brands',
        element: <BrandsPage></BrandsPage>,
        loader: () => fetch('discountCouponInfo.json')
      },
      {
        path: '/brands/:id',
        element: (
          <PrivetRouteForBrandDetails>
            <BrandDetails></BrandDetails>
          </PrivetRouteForBrandDetails>
        ),
        loader: () => fetch('discountCouponInfo.json')
      },
      {
        path: '/aboutMe',
        element: <AboutMe></AboutMe>
      },
      {
        path: '/login_register',
        element: <Login></Login>
      },
      {
        path: '/login_register/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/login_register/my_profile',
        element: (
          <PrivetRouteForProfile>
            <Profile></Profile>
          </PrivetRouteForProfile>
        )
      },
      {
        path: '/login_register/reset_password',
        element: <ResetPass></ResetPass>
      },
      {
        path: '/login_register/update_profile',
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  },
])

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default Router
