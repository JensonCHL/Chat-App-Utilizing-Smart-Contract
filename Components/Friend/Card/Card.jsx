import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import images from '../../../assets/index'

const Card = ({readMessage, el, i, readUser }) => {
    return (
        <Link href={{
            pathname: '/',
            query: { name: `${el.name}`, address: `${el.pubkey}` },
        }} >
            <div
                className='flex flex-col gap-4 p-5 w-full rounded-2xl '
                onClick={() => (readMessage(el.pubkey), readUser(el.pubkey))} >
                <div className='' >
                    <div >
                        <Image src={images.accountName}
                            alt="username"
                            width={50}
                            height={50}

                        />
                    </div>

                    <div className='flex flex-col  ' >
                        <div className='' >
                            <h4>{el.name}</h4>
                            <small>{el.pubkey.slice(21)}..</small>
                        </div>
                        <div>
                            <small>{i + 1}</small>
                        </div>
                    </div>
                </div>
            </div>
        </Link>


    )
}

export default Card
