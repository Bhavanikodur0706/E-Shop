import React from "react";

const Login = ({openSignUp}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-4 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-red-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="mb-4">
            <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
              Login
            </button>
            {/* <Link to='/register'>Sign Up</Link> */}
          </div>
        </form>
        <div className="text-center text-sm">
          <span>Don't have an account?</span>
           <button className="text-red-500 ml-1 hover:underline" onClick={openSignUp}>Sign Up</button>   
        </div>
      </div>
    </div>
  );
};

export default Login;
