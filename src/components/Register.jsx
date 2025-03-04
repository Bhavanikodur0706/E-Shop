import React from "react";

const Register = ({openLogin}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
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
          <div className="mb-4">
            <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
              Register
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          <span>Already have an account?</span>
          <a href="#" className="text-red-500 ml-1 hover:underline" onClick={openLogin}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
