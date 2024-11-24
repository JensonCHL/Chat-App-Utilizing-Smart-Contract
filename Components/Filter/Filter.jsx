import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import images from '../../assets'
import { ChatAppContext } from '../../Context/ChatAppContext'
import { Model } from '../index'

const buttonStyle = 'w-full p-4 rounded-full bg-[rgba(0,0,0,0.25)] text-[#f18303]  '

const Filter = () => {

  const { account, addFriends } = useContext(ChatAppContext);

  const [addFriend, setAddFriend] = useState(false);


  return (
    <div className='flex justify-between m-4' >
      <div className='flex flex-row gap-4 w-full text-center items-center justify-between' >
        <div className='flex items-center w-3/5  ' >
          <div className='flex items-center gap-4 rounded-full p-2 px-2 bg-[rgba(0,0,0,0.25)] text-[#f18303] ' >
            <Image  className='text-[#f18303]' src={images.search} alt='image' width={20} height={20} />
            <input className='bg-transparent border-none outline-none w-[20rem] p-3 text-[#f18303]'  type="text" placeholder='search...' />
          </div>
        </div>
        <div className='flex flex-row w-2/5 gap-10 items-center justify-center'>
          <button className={buttonStyle} >
            {// <Image src={images.search} alt='image' width={20} height={20}/>
            }
            Clear Chat
          </button>
          <button className={buttonStyle} onClick={() => setAddFriend(true)} >
            {// <Image src={images.search} alt='image' width={20} height={20}/>
}            Add Friend
          </button>
        </div>
      </div>
      {addFriend && (
        <div className='fixed inset-[0,0,0,0] z-22222 bg-[#292f3f] '>
          <Model
            className=''
            openBox={setAddFriend}
            title="Welcome to"
            head="BBCC Chat"
            info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut expedita voluptatum tempora magni et recusandae quam, dolores voluptate nobis labore? Porro nihil hic adipisci ut culpa rem aspernatur ipsam ipsum?"
            smallInfo="Select Your friend name & address"
            image={images.BBCCReg}
            functionName={addFriends}
          />
        </div>
      )}
    </div >
  )
}

export default Filter
