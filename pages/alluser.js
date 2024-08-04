import React, { useState, useEffect, useContext } from 'react'

// Local Import
import { UserCard } from '../Components/index'
import { ChatAppContext } from '../Context/ChatAppContext'


const alluser = () => {

    const { userLists, addFriends } = useContext(ChatAppContext)
    return (
        <div>
            <div className='w-[80%] m-3' >
                <h1 className='text-5xl font-bold' >Find Your Friends</h1>
            </div>

            <div className='w-[80%] m-2 grid grid-cols-3 gap-5' >
                {userLists.map((el, i) => (
                    <UserCard key={i + 1} el={el} i={i} addFriends={addFriends} />
                ))}
            </div>
            
        </div>
    )
}

export default alluser
