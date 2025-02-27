import { useSelector } from 'react-redux'
import { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

const CheckOut = () => {
  const [billingToggle, setBillingToggle] = useState(true)
  const [shippingToggle, setShippingToggle] = useState(true)
  const [paymentToggle, setPaymentToggle] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  })

  const cart = useSelector(state => state.cart)

  return (
    <div className="container mx-auto py-8 min-h-98 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold border-b pb-2 mb-4">CheckOut</h3>
      <div className='flex flex-col md:flex-row justify-between md:space-x-10 mt-8'>
        <div className='md:w-2/3 w-full'>
          <div className='bg-white shadow-md border border-gray-200 p-4 md:py-4'>
            <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
              <h3 className='text-lg md:text-xl font-bold'>Billing information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-3 md:space-y-4 mt-3 ${billingToggle ? '' : 'hidden'}`}>
              <div className='flex flex-col rounded-lg'>
                <label className='text-gray-600 text-sm'>Name</label>
                <input type="text" placeholder='Enter your name' className='w-full rounded-sm border text-sm border-gray-300 p-2' />
              </div>
              <div className='flex flex-col rounded-lg'>
                <label className='text-gray-600 text-sm'>Email</label>
                <input type="email" placeholder='Enter your Email' className='w-full rounded-sm border text-sm border-gray-300 p-2' />
              </div>
              <div className='flex flex-col rounded-lg'>
                <label className='text-gray-600 text-sm'>Mobile number</label>
                <input type="phone" placeholder='Enter your mobile Number' className='w-full rounded-sm border text-sm border-gray-300 p-2' />
              </div>
            </div>
          </div>

          {/* Shipping Section */}
          <div className='pt-4'>
            <div className='bg-white shadow-md border border-gray-200 p-4 md:py-4'>
              <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
                <h3 className='text-lg md:text-xl font-bold'>Shipping information</h3>
                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`space-y-3 md:space-y-4 mt-3 ${shippingToggle ? '' : 'hidden'}`}>
                <div className='flex flex-col rounded-lg'>
                  <label className='text-gray-600 text-sm'>Address</label>
                  <input type="text" placeholder='Enter your Address' onChange={(e)=>setShippingInfo({...shippingInfo, address:e.target.value})}
                  className='w-full rounded-sm border text-sm border-gray-300 p-2' />
                </div>
                <div className='flex flex-col rounded-lg'>
                  <label className='text-gray-600 text-sm'>City</label>
                  <input type="text" placeholder='Enter your City' onChange={(e)=>setShippingInfo({...shippingInfo, city:e.target.value})}
                  className='w-full rounded-sm border text-sm border-gray-300 p-2' />
                </div>
                <div className='flex flex-col rounded-lg'>
                  <label className='text-gray-600 text-sm'>Zip Code</label>
                  <input type="text" placeholder='Enter your Zipcode' onChange={(e)=>setShippingInfo({...shippingInfo, zip:e.target.value})}
                  className='w-full rounded-sm border text-sm border-gray-300 p-2' />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className='pt-4'>
            <div className='bg-white shadow-md border border-gray-200 p-4 md:py-4'>
              <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
                <h3 className='text-lg md:text-xl font-bold'>Payment Method</h3>
                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`space-y-3 md:space-y-4 mt-3 ${paymentToggle ? '' : 'hidden'}`}>
                <div className='flex items-center rounded-lg mb-2'>
                  <input type="radio" name='payment' checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")} />
                  <label className='text-gray-600 block ml-2'>Cash On Delivery</label>
                </div>
                <div className='flex items-center rounded-lg mb-2'>
                  <input type="radio" name='payment' checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")} />
                  <label className='text-gray-600 block ml-2'>Debit Card</label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md space-y-3">
                    <h3 className="text-sm font-semibold text-gray-800">Debit Card Details</h3>
                    <input type="text" placeholder='Card Number' className="w-full p-2 border rounded-lg focus:ring-blue-400" />
                    <input type="text" placeholder='Card Holder Name' className="w-full p-2 border rounded-lg focus:ring-blue-400" />
                    <div className="flex space-x-2">
                      <input type="text" placeholder='Expire Date' className="w-1/2 p-2 border rounded-lg focus:ring-blue-400" />
                      <input type="text" placeholder='CVV' className="w-1/2 p-2 border rounded-lg focus:ring-blue-400" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary - Moves Below in Small Screens */}
        <div className="md:w-1/3 w-full bg-white p-4 md:p-6 rounded-lg shadow-md border mt-8 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div>
            {cart &&
              cart.products.map((product, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                    <img src={product.image} alt="img" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 ml-2 md:ml-4">
                    <h4 className="text-xs md:text-sm font-medium">{product.name}</h4>
                    <p className="text-gray-500 text-xs md:text-xs">${product.price.toFixed(2)} x {product.quantity}</p>
                  </div>
                  <span className="text-xs md:text-sm font-semibold">${(product.price * product.quantity).toFixed(2)}</span>
                </div>
              ))}
          </div>
          <div className="flex justify-between font-semibold text-sm md:text-lg mb-4">
            <span>Total Price:</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-red-600 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>

  )

}

export default CheckOut