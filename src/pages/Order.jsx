import React from 'react';
import {useNavigate} from 'react-router-dom'

const Order = ({ order }) => {
  const navigate = useNavigate()
  if (!order) {
    return <p className="text-center text-gray-600 text-sm">Order details are loading...</p>;
  }

  console.log('Order details gained in order page:', order);

  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800">Thank you for your order!</h2>
      <p className="text-gray-600 text-sm">Your order has been placed successfully. You will receive an email confirmation shortly!</p>

      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Order Summary</h3>
        <p className="text-gray-700 text-sm">Order Number: <span className="font-medium">{order.orderNumber || 'N/A'}</span></p>

        <div className="mt-3">
          <h4 className="text-md font-semibold text-gray-700">Shipping Information</h4>
          {order.ShippingInformation ? (
            <>
              <p className="text-gray-600 text-sm">City: {order.ShippingInformation.city}</p>
              <p className="text-gray-600 text-sm">Zip Code: {order.ShippingInformation.zip}</p>
            </>
          ) : (
            <p className="text-gray-600 text-sm">Shipping details are not available.</p>
          )}
        </div>

        <div className="mt-3">
          <h4 className="text-md font-semibold text-gray-700">Items Ordered</h4>
          {order.products && order.products.length > 0 ? (
            order.products.map((product, index) => (
              <div key={index} className="text-gray-700 text-sm flex justify-between border-b py-2">
                <span>{product.name} (x{product.quantity})</span>
                <span>${product.price.toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm">No products found in the order.</p>
          )}
        </div>

        <div className="flex justify-between font-semibold text-gray-800 mt-3">
          <p>Total Price:</p>
          <p>${order.totalPrice ? order.totalPrice.toFixed(2) : 'N/A'}</p>
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm">
          Track Order
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm" onClick={()=>navigate('/')}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;
