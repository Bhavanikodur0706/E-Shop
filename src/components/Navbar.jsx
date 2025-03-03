import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const products = useSelector((state) => state.cart.products)
  // console.log('products from cart' , products);
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div>
          <Link to='/'>EShop</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form>
            <input type="text" placeholder='search product' className='w-full border px-4 py-2 rounded'/>
            <FaSearch className='absolute top-3 right-3 text-red-500'/>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/cart' className='relative'>
          <FaShoppingCart className='text-lg'/>
          {products.length > 0 && (
            <span className='absolute top-0 text-xs w-3 left-3 bg-red-500 rounded-full flex justify-center itesms-center text-white'>
              {products.length}
            </span>
          )}
          </Link>
          <button className='hidden md:block'>login/register</button>
          <button className='block md:hidden'><FaUser/></button>
        </div>
      </div>
      <div className='flex items-center justify-center py-4 space-x-10 text-sm font-bold'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/shop' className='hover:underline'>Shop</Link>
        <Link to='/' className='hover:underline'>About</Link>
        <Link to='/' className='hover:underline'>Contact</Link>
      </div>
    </nav>

  )
}

export default Navbar
