import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white-100 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>

                    <button className="btn btn-warning w-full mt-4">Login</button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?
                    <a href="#" className="text-blue-500 hover:underline ml-1">Create one</a>
                </p>
            </div>
        </div>
      
    );
};

export default Login;