import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            console.log(user);
            navigate(location?.state ? location.state : '/');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-white-100 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered w-full"/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered w-full"/>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn btn-warning w-full mt-4">Login</button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?
                    <Link to='/auth/register' className="text-blue-500 hover:underline ml-1">Create one</Link>
                </p>
            </div>
        </div>
      
    );
};

export default Login;