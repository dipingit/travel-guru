
const Navbar = () => {
    return (
        <div className="navbar bg-transparent absolute z-50 text-white px-8 py-4 w-full">
            <div className="flex-1">
                <a className="text-2xl font-bold tracking-wide">Travel Guru</a>
            </div>
            <div className="hidden md:flex items-center gap-6">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a>Home</a></li>
                    <li><a>News</a></li>
                    <li><a>Destination</a></li>
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