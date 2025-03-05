// import React from 'react'

// const Modal = ({isModalOpen, setIsModalOpen,children}) => {
//   if(!isModalOpen) return null;
//   return (
//     <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
//       <div className='bg-transparent rounded-lg  p-6 w-full max-w-md'>
//         <button className='absolute top-4 right-4 text-3xl text-gray-300' onClick={()=>setIsModalOpen(!isModalOpen)}>&times; </button>
//         <div>{children}</div>
//       </div>
//     </div>
//   )
// }

// export default Modal
import React from 'react';

const Modal = ({ isModalOpen, setIsModalOpen, children, bgColor }) => {
  if (!isModalOpen) return null;
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
      <div className={`${bgColor} rounded-lg p-6 w-full max-w-md`}>
        <button 
          className='absolute top-4 right-4 text-3xl text-gray-300' 
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
