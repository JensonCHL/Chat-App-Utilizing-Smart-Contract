import React from 'react'
import Image from 'next/image'
// Internal

import images from '../../assets'

const Loader = () => {
  return (
    <div className='text-center ms-1' >
      <div>
        <Image src={images.loader} width={100} height={100}></Image>
      </div>
    </div>
  )
}

export default Loader
