import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Initialize toast notifications once in your app
import { ToastContainer } from "react-toastify";



const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const handleClick = (e, product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addtoCart(product))
    // alert('Product added successfully!!')
    // Show toast notification
    toast.success("Product added successfully!", {
      position: window.innerWidth < 768 ? "bottom-center" : "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: { fontSize: window.innerWidth < 768 ? "12px" : "16px" }, // Smaller font for mobile
    });
    
  }
  return (
    
    <Link to={`/product/${product.id}`}>
      {/* Toast Container - must be placed in your root component */}
      <ToastContainer />
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
      <img src={product.image} alt="image" className='w-full h-48 object-contain mb-4'/>
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>{product.price}</p>
      <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
      </div>
      <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all' onClick={(e)=>handleClick(e, product)}>
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block'>Add to cart</span>
         

      </div>
    </div>
    </Link>
  )
}

export default ProductCard
