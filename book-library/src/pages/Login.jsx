import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

import { useState } from "react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            alert("Logged in!");
        }, 2000);
    };

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* LEFT PANEL */}
            <div className="hidden md:flex w-1/2 relative">
                <img
                    src="/Docs/library.png"
                    alt="Library shelf"
                    className="absolute w-full h-full object-cover"
                />

                {/* Quote */}
                <div className="absolute bottom-10 left-10 text-white max-w-md">
                    <p className="text-2xl font-light leading-relaxed">
                        "Once you learn to read, you will be forever <span className="font-bold">FREE.</span>"
                    </p>
                    <p className="mt-4 text-sm opacity-80"> - Frederick Douglass</p>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-20 py-12 bg-white">
                
                <div className="max-w-md w-full mx-auto">

                    {/* Header */}
                    <h1 className="text-3xl font-bold text-gray-800">
                        Get Started Now
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Enter your credentials to access the library
                    </p>

                    {/* Social Login */}
                    <div className="flex gap-4 mt-8">
                        
                        <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-50 transition">
                            <FcGoogle size={20} />
                            <span className="text-sm">Log in with Google</span>
                        </button>

                        <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-50 transition">
                            <FaApple size={20} />
                            <span className="text-sm">Log in with Apple</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-3 text-sm text-gray-400">or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Form */}
                    <form className="space-y-5"
                        onSubmit={handleSubmit}
                    >

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Name
                            </label>    
                            <input
                                type="text"
                                placeholder="Winfrida Tomeka"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 
                                focus:border-blue-500 border-gray-400 transition duration-200
                                focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email
                            </label>    
                            <input
                                type="email"
                                placeholder="windorah25@gmail.com"
                                className="w-full border rounded-lg px-4 py-2 border-gray-400  
                                transition duration-200 focus:border-blue-500 focus:ring-2 
                                focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Forgot Password
                                </button>
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="min 8 characters"
                                    className="w-full border rounded-lg px-4 py-2 pr-10 focus:border-blue-500
                                    focus:ring-2 focus:ring-blue-500 focus:outline-none
                                    border-gray-400 transition duration-200"                                   
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2-translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye /> }
                                </button> 
                            </div>       
                        </div>

                        {/* Terms */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <input type="checkbox" className="accent-blue-600" />
                            <span>
                                I agree to the {" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Terms & Policy
                                </a>
                            </span>                                                                         
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full text-white py-3 rounded-lg font-bold transition shadow-md
                                ${loading
                                    ? "bg-blue-400 cursor-not-allowed"
                                    : "bg-blue-700 hover:bg-blue-800"}
                                `}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <FaSpinner className="animate-spin" />
                                    Logging in...
                                </div>
                            ) : (
                                "Login"
                            )}
                        </button>    

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;