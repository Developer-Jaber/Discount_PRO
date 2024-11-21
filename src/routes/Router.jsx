import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import About from "../pages/About";
import ErrorPage from "../Err/ErrorPage";
import BrandsPageLayout from "../layouts/BrandsPageLayout";
import BrandsPage from "../pages/BrandsPage";
import BrandDetails from "../private/BrandDetails";
import LoginSignInPageLayout from "../layouts/LoginSignInPageLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../private/Profile";
import PrivetRouteForBrandDetails from "./PrivetRouteForBrandDetails";
import PrivetRouteForProfile from "./PrivetRouteForProfile";
import ResetPass from "../pages/ResetPass";
import UpdateProfile from "../pages/UpdateProfile";
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
    },
    {
        path: "/brands",
        element: <BrandsPageLayout></BrandsPageLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/brands",
                element: <BrandsPage></BrandsPage>,
                loader: ()=> fetch('discountCouponInfo.json'),
            },
            {
                path: "/brands/:id",
                element: <PrivetRouteForBrandDetails><BrandDetails></BrandDetails></PrivetRouteForBrandDetails>,
                loader: ()=> fetch('/discountCouponInfo.json')
            }
        ]
    },
    {
        path: "/login_register",
        element: <LoginSignInPageLayout></LoginSignInPageLayout>,
        children: [
            {
                path: "/login_register",
                element: <Login></Login>
            },
            {
                path: "/login_register/register",
                element: <SignUp></SignUp>
            },
            {
                path:  "/login_register/my_profile",
                element: <PrivetRouteForProfile><Profile></Profile></PrivetRouteForProfile>,
            },
            {
                path: "/login_register/reset_password",
                element: <ResetPass></ResetPass>
            },
            {
                path: "/login_register/update_profile",
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    },
    {
    path: "/about",
    element: <About></About>,
    }
])

const Router = () => {
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Router;