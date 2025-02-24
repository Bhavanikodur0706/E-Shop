import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10 px-6 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Left Section */}
        <div>
          <h3 className='text-2xl font-semibold'>e-Shop</h3>
          <p className='mt-4 text-gray-400'>
            Your one-step for all your needs. Shop with us and experience the best online shopping experiences.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li><Link to='/' className='hover:underline text-gray-400'>Home</Link></li>
            <li><Link to='/shop' className='hover:underline text-gray-400'>Shop</Link></li>
            <li><Link to='/contact' className='hover:underline text-gray-400'>Contact</Link></li>
            <li><Link to='/about' className='hover:underline text-gray-400'>About</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className='text-lg font-semibold'>Follow us</h4>
          <div className='flex space-x-4 mt-4 text-gray-400'>
            <a href='#' className='hover:text-white'><FaFacebook /></a>
            <a href='#' className='hover:text-white'><FaTwitter /></a>
            <a href='#' className='hover:text-white'><FaGithub /></a>
            <a href='#' className='hover:text-white'><FaLinkedin /></a>
          </div>
          
          {/* Email Subscription Form */}
          <form className='flex mt-6'>
            <input
              type='email'
              placeholder='Enter Email'
              className='w-full p-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-500 focus:outline-none'
            />
            <button className='bg-red-600 px-4 py-2 rounded-r-md text-white hover:bg-red-700'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4'>
        <div className='container mx-auto flex flex-col  md:flex-row justify-between items-center'>
        <p>&copy; 2024 EShop All Right Reserved. </p>
        <div className='flex space-x-4 mt-6 md:mt-0'>
          <a href=""className='hover:underline'>Privacy Policy</a>
          <a href=""className='hover:underline'>Terms & Conditions</a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
