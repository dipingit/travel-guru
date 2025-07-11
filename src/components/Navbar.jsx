import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isBookingPage = location.pathname === '/booking';
    const isAuthPage = location.pathname.startsWith('/auth');
    return (
        <div className={`navbar bg-transparent absolute z-50 px-8 py-4 w-full ${isBookingPage || isAuthPage ? "text-black bg-white" : "text-white bg-transparent"} `}>
            <div className="flex-1">
                <a className="text-2xl font-bold tracking-wide">Travel Guru</a>
            </div>
            <div className="hidden md:flex items-center gap-6">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><Link to='/'>Home</Link></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <Link to='/auth/login' className="btn btn-warning btn-sm cursor-pointer z-50">
                    Login
                </Link>
            </div>
        </div>
      
    );
};

export default Navbar;