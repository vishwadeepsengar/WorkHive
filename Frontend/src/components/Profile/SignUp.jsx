import React from "react";

export default function SignUp() {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 px-6">
<div className="w-full max-w-md bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 p-8">        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Create Account
        </h2>

        {/* Sign-Up Form */}
        <form className="space-y-5">
          {/* First + Last Name side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Contact</label>
            <input
              type="text"
              placeholder="+91 9999999999"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 rounded-lg text-white font-semibold transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

         {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-slate-700"></div>
          <span className="px-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-slate-700"></div>
        </div>

        {/* Google Sign In */}
    

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-purple-400 hover:underline">
            Sign In
          </a>
        </p>
      </div>
      </div>
    
  );
}
