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


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
    },
    {
        path: "/brands",
        element: <BrandsPageLayout></BrandsPageLayout>,
        children: [
            {
                path: "/brands",
                element: <BrandsPage></BrandsPage>,
                loader: ()=> fetch('discountCouponInfo.json'),
            },
            {
                path: "/brands/:id",
                element: <BrandDetails></BrandDetails>,
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