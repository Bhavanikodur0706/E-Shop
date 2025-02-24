import React from 'react'
import menImage  from '../assets/man.png'
import womenImage from '../assets/woman.png'
import kidImage from '../assets/kid.png'
const CategorySection = () => {
    const categories = [
        {
            title : "Men",
            image : menImage,
        },
        {
            title : "Women",
            image : womenImage,
        },
        {
            title : "Kid",
            image : kidImage,
        },
    ];
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-3 mx-auto gap-6 cursor-pointer'>
      {categories.map((items,index)=>(
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={items.image} alt="image" className='w-full h-full rounded-lg object:cover shadow-md'/>
            <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold'>{items.title}</p>
                <p className='text-gray-600'>View All</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
