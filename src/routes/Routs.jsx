import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import About from "../pages/About";
import ErrorPage from "../Err/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {}
        ]
    },
    {
    path: "/about",
    element: <About></About>,
    }
])

const Routs = () => {
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Routs;