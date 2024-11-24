import React, { useState, useContext } from 'react'
import { FaRegCheckCircle, MdCancel } from "react-icons/fa";

import Image from 'next/image'

// Internal
import images from '../../assets'
import { ChatAppContext } from '../../Context/ChatAppContext'
import { Loader } from '../../Components/index'

const Model = ({ openBox, title, address, head, info, smallInfo, image, functionName }) => {

  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const {loading} = useContext(ChatAppContext);
  return (
    <div className='w-full m-1 items-center'>
      <div className='grid grid-cols-[1.4fr_1fr] items-center w-[95%]' >
        <div className='w-[85%]'>
          <Image src={images.BBCCReg} alt='buddy' width={600} height={600}></Image>
        </div>
        <div className='flex flex-col text-lg text-[#F18303] gap-y-4'>
          <h1 className='flex flex-col text-[4rem] gap-10' >
            {title} <span className='text-[5rem] mt-1' >BBCC Chat</span>
          </h1>
          <p className='text-white mt-7' >{info}</p>
          <small className='text-lg' >{smallInfo}</small>

          {
            loading == true ? (
              <Loader/>
            ) : (
              <div className='flex flex-col w-full items-center gap-2 cursor-pointer'>
                <div className='flex h-full gap-3 p-5 block w-full bg-[rgba(0,0,0,0.25)] rounded-lg' >
                  <Image className='color-[#F18303]' src={images.accountName} alt='tes' width={30} height={30} ></Image>
                  <input className='bg-transparent text-sm outline-none w-full ' type="text" placeholder='your name' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='flex h-full gap-3 p-5 block w-full bg-[rgba(0,0,0,0.25)] rounded-lg' >
                  <Image src={images.account} alt='tes' width={30} height={30} ></Image>
                  <input className='bg-transparent text-sm outline-none w-full' type="text" placeholder={address || "Enter Address.."} onChange={(e) => setAccountAddress(e.target.value)} />
                </div>

                <div className='w-full h-full grid grid-cols-[repeat(2,1fr)] gap-5' >
                  <button className='flex p-4 bg-[rgba(0,0,0,0.25)] items-center justify-center gap-1 cursor-pointer rounded-lg ' onClick={() => functionName({ name, accountAddress })} >
                    {""}
                    <Image src={images.submit} alt='tes' width={30} height={30} ></Image>
                    Submit
                  </button>
                  <button className='flex p-4 bg-[rgba(0,0,0,0.25)] items-center justify-center gap-1 cursor-pointer rounded-lg ' onClick={() => openBox(false)} >
                    <Image src={images.cancel} alt='tes' width={30} height={30} ></Image>
                    {""}
                    cancel
                  </button>
                </div>
              </div>
            )
          }


        </div>
      </div>

    </div>
  )
}

export default Model
