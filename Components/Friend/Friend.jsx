import { useState, useContext } from 'react'
import Image from 'next/image'

import Chat from './Chat/Chat'
import Card from './Card/Card'

import { ChatAppContext } from "../../Context/ChatAppContext"

const Friend = () => {
  const { sendMessage, account, friendLists, readMessage, userName, loading, currentUserName, currentUserAddress, readUser,friendMsg } = useContext(ChatAppContext);
  return (
    <div className='flex flex-row w-[80%] m-5 h-[600px]'>
      <div className='flex w-full gap-4 ' >
        <div className='flex flex-col w-1/3 h-full gap-5 bg-[rgba(0,0,0,0.25)] rounded-2xl' >
          {
            friendLists.map((el, i) => (
              <Card key={i + 1} el={el} i={i}
                readMessage={readMessage}
                readUser={readUser}
              />
            ))}
        </div>
        <div className='w-full bg-[rgba(0,0,0,0.25)] rounded-2xl ' >
          <Chat sendMessage={sendMessage}
            readMessage={readMessage}
            friendMsg={friendMsg}
            account={account}
            userName={userName}
            loading={loading}
            currentUserName={currentUserName}
            currentUserAddress={currentUserAddress}
          />
        </div>
      </div>
    </div>
  )
}

export default Friend
