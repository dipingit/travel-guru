import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isBookingPage = location.pathname === '/booking';
    return (
        <div className={`navbar bg-transparent absolute z-50 px-8 py-4 w-full ${isBookingPage ? "text-black bg-white" : "text-white bg-transparent"} `}>
            <div className="flex-1">
                <a className="text-2xl font-bold tracking-wide">Travel Guru</a>
            </div>
            <div className="hidden md:flex items-center gap-6">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a>Home</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <button className="btn btn-warning btn-sm cursor-pointer z-50">
                    Login
                </button>
            </div>
        </div>
      
    );
};

export default Navbar;