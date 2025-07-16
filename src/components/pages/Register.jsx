import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createNewUser, setUser} = useContext(AuthContext);
    const [password_mismatch, setPassword_mismatch] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirm_password');
        if(password != confirmPassword){
            setPassword_mismatch(true);
            return;
        }
        // Reset the error if passwords match
        setPassword_mismatch(false);
        createNewUser(email, password)
            .then((userCred) => {
                // Signed up 
                const user = userCred.user;
                setUser(user);
                updateProfile(user, {
                    displayName: name
                }).then(() => {
                    console.log("Display name updated successfully");
                    console.log(user.displayName); // You can now use this
                    navigate('/');
                }).catch((error) => {
                    console.error("Failed to update display name", error);
                });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
              });
         
    }
    return (
        <div className="min-h-screen flex items-center justify-center pt-24 pb-24">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name
                        </label>
                        <input
                            type="text" name="name" required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="John Doe"/>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email" name="email" required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password" name="password" required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="********"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password" name="confirm_password" required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="********"
                        />
                        {
                            password_mismatch && <p className='text-red-600'>password did not match</p> 
                        }
                    </div>

                    <button type="submit" className="btn btn-warning w-full mt-4">Register</button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-6">
                    Already have an account?
                    <Link to="/auth/login" className="text-yellow-500 hover:underline font-medium ml-1">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
