import React from 'react'
import { useState } from 'react'

const ChangeAddress = ({setAddress,setIsModalOpen}) => {
  const [newAddress, setNewAddress] = useState('')
  const onClose=()=>{
    setAddress(newAddress)
    setIsModalOpen(false)
  }

  return (
    <div>
      <input type="text" 
      placeholder='enter new address'
      className='border p-2 w-full mb-4' onChange={(e)=>setAddress(e.target.value)}/>
      <div className='flex justify-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2 'onClick={()=>setIsModalOpen(false)}>Cancel</button>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2' onClick={()=>onClose}>Save address</button>
      </div>
    </div>
  )
}

export default ChangeAddress