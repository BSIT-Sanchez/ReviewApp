import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <button
        onClick={handleGoHome}
        className="bg-[#FF5900] text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-[#e54e00] transition"
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFound;
