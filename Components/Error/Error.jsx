import React from 'react'



const Error = ({error}) => {
  return (
    <div className='fixed inset-custom z-1111111111 text-center p-8 rounded-custom shadow-custom mx-auto bg-[#F18303] flex items-center justify-center ' >
      <div className='items-center text-center '>
        <h1 className='text-3xl font-bold text-primary-text items-center' >Please fix error and reload browser</h1>
        <p className='items-center' >{error}</p>
        
      </div>
    </div>
  )
};

export default Error
