import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Internal
import { ChatAppContext } from '../../Context/ChatAppContext';
import { Model, Error } from '../index';
import images from "../../assets";

const style1 = "flex flex-col items-center justify-between transition-colors duration-500 ease-in-out";
const style2 = "flex items-center border-b-2 border-[#F18303] pb-3 text-[#F18303] transition-padding duration-500 ease-in-out";

const Navbar = () => {
  const menuItems = [
    { menu: "All users", link: "/" },
    {
      menu: "CHAT",
      link: "/",
    },
    {
      menu: "CONTACT",
      link: "/",
    },
    {
      menu: "SETTINGS",
      link: "/",
    },
    {
      menu: "FAQS",
      link: "/",
    },
    {
      menu: "TERMS OF USE",
      link: "/",
    }

  ];
  // USER STATE
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { account, userName, connectWallet, createAccount, error } = useContext(ChatAppContext);
  return (
    <div className='flex flex-col px-4 mt-4 bg-[#292F3f]'>
      <div className='flex flex-row justify-between items-center'>
        <div className='' >
          <Image src={images.logo} alt='logo' className='w-20 h-auto' ></Image>
        </div>
        <div className='flex flex-row items-center justify-between gap-5'>
          {menuItems.map((el, i) => (
            <div
              onClick={() => setActive(i + 1)}
              key={i + 1}
              className={`${style1} ${active == i + 1 ? style2 : ""
                }`}
            >
              <Link className='flex justify-between' href={el.link} >
                {el.menu}
              </Link>

            </div>
          ))}
        </div>
        {/* Create Wallet */}
        <div className='flex justify-center'>
          {account == "" ? (
            <button onClick={() => connectWallet()}>
              {""}
              <span>Connect Wallet</span>
            </button>
          ) : (
            <button onClick={() => setOpenModel(true)} className='flex flex-row gap-1 items-center color:#F18303 bg-black text-[#F18303] border-0 px-3 py-1 rounded-lg' >
              {""}
              <Image src={userName ? images.accountName : images.accountName} alt='Account iamge' width={40} height={40} />
              <small className='text-lg' >{userName || "Create Account"}</small>
            </button>
          )}
        </div>
        <div
          className=''
          onClick={() => setOpen(true)}
        >
          <Image className='size-10' src={images.open} alt='open'
            width={30} height={39}
          />
        </div>
      </div>
      {/* Model Component */}
      {openModel && (
        <div className='fixed inset-0 bg-[#292F3f] z-77777777' >
          <Model
            openBox={setOpenModel}
            title="Welcome to"
            head="Chat Buddy"
            info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta, ex rerum earum, hic sapiente corrupti reprehenderit inventore rem nulla facilis laborum placeat facere iure. Ullam ad dolores est explicabo.'
            smallInfo="Kindley seclet your name"
            image={images.hero}
            functionName={createAccount}
            address={account}
          />
        </div>
      )}
      {error == ""?"" : <Error error={error}/>}
    </div>
  )
}
// {error == ""?"" : <Error error={error}/>}

export default Navbar
