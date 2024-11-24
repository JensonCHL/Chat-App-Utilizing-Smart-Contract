import React from 'react'
import Image from 'next/image'

import images from '../../assets'


const UserCard = ({ el, i, addFriends }) => {
  console.log(el);
  return (
    <div className='flex flex-col bg-[rgba(0,0,0,0.25)] relative text-center rounded-md align-center p-5' >
      <div className='flex flex-col gap-2 align-center text-center items-center' >
        <Image  
          className=''
          src={images.profile} alt='user'
          width={100}
          height={100} />
        <div className='flex flex-col overflow-hidden gap-3 text-center items-center'>
          <h3 className='text-lg font-semibold truncate'>{el.name}</h3>
          <p className='text-sm text-gray-100 truncate'>{el.accountAddress.slice(0,25)}</p>
          
          <button className='text-[#F18303] bg-[rgba(0,0,0,0.25)] rounded-[1rem] w-auto p-3 px-8 border-none  ' onClick={() => addFriends({ name: el.name, accountAddress: el.accountAddress })} >Add Friend</button>
        </div>
      </div>
      <small className='m-3 right-1 absolute px-[1.3rem] py-[1rem] bg-[#F18303] rounded-full' >{i+1}</small>
    </div>
  )
}

// <Image src={images[`image ${i + 1}`]}
//           alt='user'
//           width={100}
//           height={100}
//         />
export default UserCard
