import React from 'react'
import { useState } from 'react'
import { FaAngleUp,FaAngleDown } from 'react-icons/fa'

const CheckOut = () => {
  const [billingToggle, setBillingToggle] = useState(true)
  const [shippingToggle, setShippingToggle] = useState(true)

  return (
    <div className="container mx-auto py-8 min-h-98 md:px-16 lg:px-24">
        <h3 className="text-2xl font-semibold border-b pb-2 mb-4">CheckOut</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>
          <div className='bg-white shadow-md border border-gray-200 py-4'>
            <div className='flex items-center justify-between' onClick={()=>setBillingToggle(!billingToggle)}>
              <h3 className='px-2 text-xl font-bold'>Billing information</h3>
              {billingToggle?<FaAngleDown/>:<FaAngleUp/>}
            </div>
            <div className={`space-y-4 ${billingToggle?'':'hidden'}`}>
              <div className='flex flex-col rounded-lg px-2'>
                <label htmlFor="" className='text-gray-600 text-sm'>Name</label>
                <input type="text" placeholder='Enter your name' className='rounded-sm border text-sm border-gray-300 p-2'/>
              </div>
            </div>
            <div className={`space-y-4 ${billingToggle?'':'hidden'}`}>
              <div className='flex flex-col rounded-lg px-2'>
                <label htmlFor="" className='text-gray-600 text-sm'>Email Address</label>
                <input type="email" placeholder='Enter your Email' className='rounded-sm border text-sm border-gray-300 p-2'/>
              </div>
            </div>
            <div className={`space-y-4 ${billingToggle?'':'hidden'}`}>
              <div className='flex flex-col rounded-lg px-2'>
                <label htmlFor="" className='text-gray-600 text-sm'>Phone</label>
                <input type="phone" placeholder='Enter your phone Number' className='rounded-sm border text-sm border-gray-300 p-2'/>
              </div>
            </div>
          </div>
          <div className='pt-4'>
          <div className='bg-white shadow-md border border-gray-200 py-4'>
            <div className='flex items-center justify-between' onClick={()=>setShippingToggle(!shippingToggle)}>
              <h3 className='px-2 text-xl font-bold'>Shipping information</h3>
              {shippingToggle?<FaAngleDown/>:<FaAngleUp/>}
            </div>
            <div className={`space-y-4 ${shippingToggle?'':'hidden'}`}>
              <div className='flex flex-col rounded-lg px-2'>
                <label htmlFor="" className='text-gray-600 text-sm' >Name</label>
                <input type="text" placeholder='Enter your name' className='rounded-sm border text-sm border-gray-300 p-2'/>
              </div>
            </div>
            <div className={`space-y-4 ${shippingToggle?'':'hidden'}`}>
              <div className='flex flex-col rounded-lg px-2'>
                <label htmlFor="" className='text-gray-600 text-sm'>Email Address</label>
                <input type="email" placeholder='Enter your Email' className='rounded-sm border text-sm border-gray-300 p-2'/>
              </div>
            </div>
            <div className={`space-y-4 ${shippingToggle?'':'hidden'}`}>
              <div className='flex flex-col rounded-lg px-2'>
                <label htmlFor="" className='text-gray-600 text-sm'>Phone</label>
                <input type="phone" placeholder='Enter your phone Number' className='rounded-sm border text-sm border-gray-300 p-2'/>
              </div>
            </div>
          </div>
          </div>
        </div>
        {/* <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>

        </div> */}
      </div>
      </div>
    )

}

export default CheckOut