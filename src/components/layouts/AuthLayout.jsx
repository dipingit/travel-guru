import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;