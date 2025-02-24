import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { MdDescription } from 'react-icons/md'

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-red-600' />,
            title: 'Free shipping',
            Description: 'Get your orders with no extra cost'
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600' />,
            title: 'Support 24/7',
            Description: '24/7 services'
        },
        {
            icon: <FaMoneyBill1Wave className='text-3xl text-red-600' />,
            title: '100% money back',
            Description: 'Full refund if you are not satisfied with the services'
        },
        {
            icon: <FaLock className='text-3xl text-red-600' />,
            title: 'Secure Payments',
            Description: 'Get your secure payments'
        },
        {
            icon: <FaTag className='text-3xl text-red-600' />,
            title: 'Discount',
            Description: 'Get Discounts everytime you shop'
        },
    ]
    return (
        <div className='bg-white pb-8 pt-12'>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {infoItems.map((items, index) => (
                    <div key={index} className='flex flex-col items-center text-center shadow-md p-4 border rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                        {items.icon}
                        <h3 className='mt-4 text-xl font-semibold'>{items.title}</h3>
                        <p className='mt-4 text-gray-600'>{items.Description}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default InfoSection
