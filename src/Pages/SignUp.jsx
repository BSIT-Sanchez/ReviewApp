import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai"; // Icon for error indication
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"; // Eye icon for showing and hiding password

function SignUp() {
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });
  const [errors, setErrors] = useState({ fullname: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Hook for navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when typing
  };

  // Validate inputs
  const validateInputs = () => {
    const newErrors = {};

    // Fullname validation
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Please enter your full name.";
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Updated regex to allow only @gmail.com
    if (!formData.email.trim()) {
      newErrors.email = "Please enter an email address.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid Gmail address (e.g., user@gmail.com).";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password must be between 4 and 60 characters.";
    } else if (formData.password.length < 4 || formData.password.length > 60) {
      newErrors.password = "Password must be between 4 and 60 characters.";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateInputs();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate successful signup (e.g., API call)
      console.log("Signup successful", formData);

      // Redirect to the login page after successful signup
      navigate("/signin");
    }
  };

  const hasError = Object.keys(errors).some((key) => errors[key] !== "");

  return (
    <div
      className={`relative w-full ${hasError ? "h-[120vh]" : "h-screen"} bg-cover bg-center flex flex-col justify-center items-center text-white text-center `}
      style={{
        backgroundImage: "url('/images/signin-bg.jpg')",
        opacity: ".92",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#672d0c] opacity-50"></div>

      {/* Logo */}
      <div className="absolute top-4 left-10 items-center gap-[2px] z-20 hidden md:flex">
        <h1 className="text-[#FF5900] font-bold text-[24px]">Teacher</h1>
        <h1 className="text-[#fff] font-bold text-[24px]">Review</h1>
      </div>

      {/* Form Content */}
      <div className="relative z-10 w-[95%] md:w-full max-w-md px-6 py-8 rounded-md shadow-lg" style={{ backgroundColor: "rgba(0, 0, 0, 0.51)" }}>
        <h1 className="text-[40px] font-bold mb-6 text-left text-[#FFF]">Sign Up</h1>
        <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className={`px-4 py-2 rounded-md border w-full ${errors.fullname ? "border-red-500" : "border-white"} focus:outline-none bg-transparent text-white placeholder:text-white placeholder:opacity-60 focus:ring-1 focus:ring-[#FF5900]`}
            />
            {errors.fullname && (
              <div className="flex items-start mt-2 text-red-500 text-sm">
                <AiFillInfoCircle className="mr-2 mt-1" />
                <span>{errors.fullname}</span>
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`px-4 py-2 rounded-md border w-full ${errors.email ? "border-red-500" : "border-white"} focus:outline-none bg-transparent text-white placeholder:text-white placeholder:opacity-60 focus:ring-1 focus:ring-[#FF5900]`}
            />
            {errors.email && (
              <div className="flex items-start mt-2 text-red-500 text-sm">
                <AiFillInfoCircle className="mr-2 mt-1" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`px-4 py-2 rounded-md border w-full ${errors.password ? "border-red-500" : "border-white"} focus:outline-none bg-transparent text-white placeholder:text-white placeholder:opacity-60 focus:ring-1 focus:ring-[#FF5900]`}
            />
            <div
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />} {/* Eye icon */}
            </div>
            {errors.password && (
              <div className="flex items-start mt-2 text-red-500 text-sm">
                <AiFillInfoCircle className="mr-2 mt-1" />
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          {/* Sign-Up Button */}
          <button type="submit" className="w-full bg-[#FF5900] text-white py-2 rounded-md hover:bg-[#e54e00] transition text-[20px] font-bold">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Google Button */}
          <button type="button" className="w-full flex items-center justify-center gap-2 bg-[#Fff] text-black py-2 rounded-md font-bold border">
            <FaGoogle style={{ color: "#db4437" }} /> Sign up with Google
          </button>

          {/* Facebook Button */}
          <button type="button" className="w-full flex items-center justify-center gap-2 bg-[#fff] py-2 rounded-md font-bold border text-black">
            <FaFacebook style={{ color: "#1877F2" }} /> Sign up with Facebook
          </button>

          {/* Login Prompt */}
          <p className="text-gray-300 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#FF5900] hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
