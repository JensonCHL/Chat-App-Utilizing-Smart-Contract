import React, { useState, useEffect, Children } from 'react'
import { useRouter } from 'next/router'

// internal IMPORT
import {
    CheckIfWalletConnected,
    connectWallet,
    connectingWithContract
}
    from '../Utils/apiFeature';


export const ChatAppContext = React.createContext();
export const ChatAppProvider = ({ children }) => {
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    // Chat user Data
    const [currentUserName, setcurrentUserName] = useState("");
    const [currentUserAddress, setcurrentUserAddress] = useState("");

    const router = useRouter();

    // Fetch Data time when page loaded
    const fetchData = async () => {
        try {
            // Code dalem sini manggil function yang ada di API
            // Get contract
            const contract = await connectingWithContract();
            //  Get account
            const connectAccount = await connectWallet();
            setAccount(connectAccount);
            // Get User Name
            // const userName = await contract.getUsername(connectAccount);
            // setUserName(userName);
            // Get my friendlist
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);
            // Get all app user list
            const userList = await contract.getAllAppUser();
            setUserLists(userList);

        } catch (error) {
            setError("Please install and connect your wallet");
            console.log(error)
        }

    };
    useEffect(() => {
        fetchData();
    }, [])

    // Read Message
    const readMessage = async (friendAddress) => {
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            setError("Currently you have no Message");
        }
    };
    // Create account
    const createAccount = async ({ name, accountAddress }) => {
        try {
            if (name || accountAddress)
                return setError("Please provide name and account");

            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Error while creating your account please reload the page");
        }
    };
    // Add your firnds
    const addFriends = async ({ name, accountAddress }) => {
        try {
            if (name || accountAddress)
                return setError("Please provide name and account");

            const contract = await connectingWithContract();
            const addMyFriends = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriends.wait();
            setLoading(false);
            router.push('/');
            window.location.reload();
        } catch (error) {
            setError("Something error ");
        }
    };
    // send message
    const sendMessage = async ({ msg, accountAddress }) => {
        try {
            if (msg || accountAddress)
                return setError("Please provide parameter");

            const contract = await connectingWithContract();
            const sendMsg = await contract.sendMessage(accountAddress, msg);
            setLoading(true);
            await sendMsg.wait();
            setLoading(false);
            router.push('/');
            window.location.reload();
        } catch (error) {
            setError("Something error ");
        }
    };

    // Read info
    const readUser = async ({ userAddress }) => {
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setcurrentUserName(userName);
        setcurrentUserAddress(userAddress);
    };

    return (
        // UseState
        <ChatAppContext.Provider
            value={{
                readMessage,
                createAccount,
                addFriends,
                sendMessage,
                readUser,
                connectWallet,
                CheckIfWalletConnected,
                account,
                userName,
                friendLists,
                friendMsg,
                loading,
                userLists,
                error
            }}>
            {children}
        </ChatAppContext.Provider>
    )
}

export default ChatAppContext
