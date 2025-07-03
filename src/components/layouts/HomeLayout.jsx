import Navbar from "../Navbar";
import Home from "../pages/Home";

const HomeLayout = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <Home></Home>
        </div>
    );
};

export default HomeLayout;