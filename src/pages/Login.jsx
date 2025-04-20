import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("dummyUser"));
    if (storedUser && storedUser.email === email) {
      localStorage.setItem("isAuthenticated", "true");
      setTimeout(() => navigate("/businesspage"), 100); // add slight delay
    } else {
      alert("Invalid email or user not registered.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fbfd] px-4">
      <div className="bg-white p-8 rounded-3xl shadow-md w-full max-w-md text-center space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Login to ReferralHub
        </h2>

        <button className="w-full border border-blue-400 text-blue-600 font-medium py-2 rounded-md hover:bg-blue-50 transition">
          Continue with Google/Microsoft
        </button>

        <div className="space-y-1 text-left mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Magic Link Login
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Send Magic Link
          </button>
        </div>

        <div className="flex items-center gap-4 my-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

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

          <div className="flex justify-between items-center text-sm mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember Me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-2"
        >
          Login
        </button>

        <div className="flex items-center gap-4 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center gap-4">
          <FcGoogle size={22} className="cursor-pointer" />
          <FaFacebookF size={20} className="text-[#1877f2] cursor-pointer" />
          <FaXTwitter size={20} className="text-black cursor-pointer" />
          <FaLinkedinIn size={20} className="text-[#0a66c2] cursor-pointer" />
        </div>

        <p className="text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
}
