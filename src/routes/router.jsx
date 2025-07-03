import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
]);

export default router;
