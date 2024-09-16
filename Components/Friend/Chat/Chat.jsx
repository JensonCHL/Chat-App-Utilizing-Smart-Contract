import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import images from "../../../assets"
import { useRouter } from 'next/router'
import { convertTime } from '../../../Utils/apiFeature'
import { Loader } from "../../index"
const Chat = ({ sendMessage, readMessage, friendMsg, account, userName, loading, currentUserName, currentUserAddress }) => {

    const [message, setMessage] = useState('');
    const [chatData, setChatData] = useState({ name: "", address: " ", });
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady) return
        setChatData(router.query);
    }, [router.isReady]);
    // console.log(chatData.address,chatData.name)

    return (
        <div
            className='flex flex-col gap-3 w-full h-full p-4 rounded-2xl overflow-none '
        >
            {currentUserName && currentUserAddress ? (
                <div className='flex flex-row gap-4 '>
                    <Image src={images.accountName} width={50}
                        height={50}  ></Image>
                    <div className='flex flex-col' >
                        <h4>{currentUserName}</h4>
                        <p>{currentUserAddress}</p>
                    </div>
                </div>

            ) : (
                ""
            )}
            <div className='mt-[10px] overflow-y-scroll' >
                <div className='h-[50vh] flex w-[80%] overflow-y-scroll items-center' >
                    <div className='flex flex-col w-full flex-grow overflow-auto mb-4 justify-center ' >
                        {
                            friendMsg.map((el, i) => (
                                <div
                                    className='flex flex-col gap-2 ml-10'
                                >{el.sender === chatData.address ? (
                                    <div className='flex flex-row items-center gap-2'  >
                                        <Image src={images.accountName}
                                            width={50}
                                            height={50}
                                        />
                                        <span>
                                            {el.sender.slice(0, 6)}...{el.sender.slice(-4)} {""}
                                            <small> Time: {convertTime(el.timestamp)}</small>
                                        </span>
                                    </div>
                                ) : (
                                    <div className='flex flex-row items-center gap-2'>
                                        <Image src={images.accountName}
                                            width={50}
                                            height={50}
                                        />
                                        <span>
                                            
                                            {el.sender.slice(0, 6)}...{el.sender.slice(-4)} {""}
                                            <small>Time: {convertTime(el.timestamp)}</small>
                                        </span>
                                    </div>
                                )}
                                    <p
                                        className='p-2 rounded-md bg-[#f18203]'
                                        key={i + 1} >
                                        {el.msg}
                                        {""}
                                        {""}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
                {currentUserName && currentUserAddress ? (
                    <div>
                        <div className='flex flex-row justify-center gap-5 items-center p-2 border-t border-gray-300' >
                            <Image src={images.smile} width={30} height={30} />
                            <input className='w-[50%] border-none p-2 bg-white text-black outline-none rounded-lg' type="text" placeholder='type your message'
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Image src={images.file} width={50} height={50} />
                            {
                                loading == true ? (
                                    <Loader />
                                ) : (

                                    <Image src={images.submit}
                                        width={50}
                                        height={50}
                                        onClick={() => sendMessage({ msg: message, accountAddress: currentUserAddress })}

                                    />

                                )
                            }

                        </div>
                    </div>
                ) : ""}
            </div>
        </div>
    )
}

export default Chat
