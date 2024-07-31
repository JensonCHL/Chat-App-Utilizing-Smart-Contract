import React, { useState, useEffect, useContext } from 'react'

// Local Import
import { UserCard } from '../Components/index'
import ChatAppContext from '../Context/ChatAppContext'


const alluser = () => {

    const { userLists, addFriends } = useContext(ChatAppContext)
    return (
        <div>
            <div>User Info
                <h1>Find Your Friends</h1>
            </div>

            <div>All User</div>
            {userLists.map((el,i)=>{
                <UserCard key={i+1} el={el} i={i} addFriends={addFriends} />
            })}
        </div>
    )
}

export default alluser
