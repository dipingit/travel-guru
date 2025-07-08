import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";
import Booking from "../components/pages/Booking";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
       
    },
    {
        path: 'booking',
        element: <Booking></Booking>
    }
]);

export default router;
