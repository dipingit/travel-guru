import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import Booking from "../components/pages/Booking";
import Login from "../components/pages/Login";
import AuthLayout from "../components/layouts/AuthLayout";
import Register from "../components/pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
       
    },
    {
        path: 'booking',
        element: <Booking></Booking>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ],
    }
]);

export default router;
