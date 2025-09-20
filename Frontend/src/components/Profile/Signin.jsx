import React from "react";

const SignIn = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 px-6">
      <div className="w-full max-w-md bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Sign in to manage your projects and team
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-gray-600 bg-slate-800 text-purple-500 focus:ring-purple-500"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-purple-400 transition">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 rounded-lg text-white font-semibold transition-all duration-300"
          >
            Sign In
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
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
