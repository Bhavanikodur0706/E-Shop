import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import emptyCartImage from '../assets/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress'
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { Navigate, useNavigate } from 'react-router-dom';
const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [address, setAddress] = useState('Main Street');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Navigate = useNavigate()

  return (
    <div className="container mx-auto p-4">
      {cart.products.length > 0 ? (
        <div className="bg-white p-4 md:p-6 shadow-md rounded-lg">
          <h3 className="text-xl md:text-2xl font-semibold border-b pb-2 mb-4">SHOPPING CART</h3>

          {/* Cart Items & Cart Total Section */}
          <div className="flex flex-col md:flex-row gap-6">

            {/* Cart Items Section */}
            <div className="w-full md:w-2/3">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-5 gap-4 bg-gray-100 p-3 rounded-md font-semibold text-gray-700">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                <p>Remove</p>
              </div>

              {/* Cart Items */}
              <div className="divide-y">
                {cart.products.map((product) => (
                  <div key={product.id} className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 items-center py-4">

                    {/* Product Image & Name */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                      <img src={product.image} alt={product.name} className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md border" />
                      <h3 className="text-gray-700 font-medium text-sm md:text-base truncate">{product.name}</h3>
                    </div>

                    {/* Price */}
                    <p className="text-gray-700 font-medium text-sm md:text-base">${product.price}</p>

                    {/* Quantity with + and - Buttons */}
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400 text-xs md:text-sm"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                      >-</button>
                      <span className="mx-2 md:mx-3 text-sm md:text-lg">{product.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400 text-xs md:text-sm"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                      >+</button>
                    </div>

                    {/* Subtotal */}
                    <p className="text-gray-700 font-medium text-sm md:text-base">
                      ${(product.quantity * Number(product.price)).toFixed(2)}
                    </p>

                    {/* Remove Button */}
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      <FaTrashAlt size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Total Section */}
            <div className="w-full md:w-1/3 bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Cart Total</h3>

              <div className="flex justify-between mb-2 text-sm md:text-base">
                <span className="font-medium">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-2 text-sm md:text-base">
                <p className="font-medium">Shipping:</p>
                <p className="text-gray-600">Shipping to:</p>
                <span className="text-gray-800 font-medium">{address}</span>
                <button className="ml-3 text-blue-500 hover:text-blue-700 underline text-xs md:text-sm" onClick={() => setIsModalOpen(true)}>Change Address</button>
              </div>

              <div className="flex justify-between font-semibold text-base md:text-lg">
                <span>Total Price:</span>
                <span className="text-gray-800 font-bold">${cart.totalPrice}.00</span>
              </div>

              {/* Clear Cart Button */}
              <button
                className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md text-sm md:text-lg"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>

              {/* Checkout Button */}
              <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm md:text-lg" onClick={() => Navigate('/checkout')}>
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Modal for Change Address */}
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptyCartImage} alt="empty cart" className="w-64 md:w-100" />
        </div>
      )}
    </div>

  );
};

export default Cart;

