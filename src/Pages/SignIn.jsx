import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai"; // Icon for error indication
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Hook for navigation

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when typing
  };

  const validateInputs = () => {
    const newErrors = {};

    // Check if username is an email or username
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Updated regex to allow only @gmail.com
    if (!formData.username.trim()) {
      newErrors.username = "Please enter a username or email address.";
    } else if (!emailRegex.test(formData.username)) {
      newErrors.username = "Please enter a valid Gmail address (e.g., user@gmail.com).";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password must be between 4 and 60 characters.";
    } else if (formData.password.length < 4 || formData.password.length > 60) {
      newErrors.password = "Password must be between 4 and 60 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateInputs();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted successfully", formData);

      // Redirect to the home page after successful sign-in
      navigate("/");
    }
  };

  const hasError = Object.keys(errors).some((key) => errors[key] !== "");

  return (
    <div
    className={`relative w-full ${hasError ? "h-[110vh]" : "h-screen"} bg-cover bg-center flex flex-col justify-center items-center text-white text-center`}
    style={{
      backgroundImage: "url('/images/signin-bg.jpg')",
      opacity: ".92",
    }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#672d0c] opacity-50"></div>

      {/* Logo */}
      <div className="absolute top-4 left-10 flex items-center gap-[2px] z-20">
        <h1 className="text-[#FF5900] font-bold text-[24px]">Teacher</h1>
        <h1 className="text-[#fff] font-bold text-[24px]">Review</h1>
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-md px-6 py-8 rounded-md shadow-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.51)", // Black with 51% opacity
        }}
      >
        {/* Heading */}
        <h1 className="text-[40px] font-bold mb-6 text-left text-[#FFF]">
          Sign In
        </h1>

        {/* Sign-In Form */}
        <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username or Email Address"
              value={formData.username}
              onChange={handleChange}
              className={`px-4 py-2 rounded-md border w-full ${
                errors.username ? "border-red-500" : "border-white"
              } focus:outline-none bg-transparent text-white placeholder:text-white placeholder:opacity-60 focus:ring-1 focus:ring-[#FF5900]`}
            />

            {errors.username && (
              <div className="flex items-start mt-2 text-red-500 text-sm">
                <AiFillInfoCircle className="mr-2 mt-1" />
                <span>{errors.username}</span>
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`px-4 py-2 w-full rounded-md border ${
                  errors.password ? "border-red-500" : "border-white"
                } focus:outline-none bg-transparent text-white placeholder:text-white placeholder:opacity-60 focus:ring-1 focus:ring-[#FF5900]`}
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-[#FF5900]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <div className="flex items-start mt-2 text-red-500 text-sm">
                <AiFillInfoCircle className="mr-2 mt-1" />
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          {/* Forgot Password */}
          <a href="#" className="text-gray-300 text-sm hover:underline self-end">
            Forgot Password?
          </a>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full bg-[#FF5900] text-white py-2 rounded-md hover:bg-[#e54e00] transition text-[20px] font-bold"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Google Button with Color Palette */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#Fff] text-black py-2 rounded-md font-bold border"
          >
            <FaGoogle style={{ color: "#db4437" }} /> Sign in with Google
          </button>

          {/* Facebook Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#fff] py-2 rounded-md font-bold border text-black"
          >
            <FaFacebook style={{ color: "#1877F2" }} /> Sign in with Facebook
          </button>

          {/* Sign Up Prompt */}
          <p className="text-gray-300 text-sm mt-4">
            New to TeacherReview?{" "}
            <Link to="/signup" className="text-[#FF5900] hover:underline">
              Sign Up now.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
