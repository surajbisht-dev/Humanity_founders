import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Dummy signup logic
    if (email && password) {
      localStorage.setItem("dummyUser", JSON.stringify({ email }));
      navigate("/login");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fbfd] px-4">
      <div className="bg-white p-8 rounded-3xl shadow-md w-full max-w-md text-center space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Register for ReferralHub
        </h2>

        <div className="text-left space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="robert.fox@myemail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <label className="block text-sm font-medium text-gray-700 mt-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-2"
        >
          Register
        </button>

        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login now
          </a>
        </p>
      </div>
    </div>
  );
}
