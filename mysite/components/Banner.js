import React from 'react'
import Image  from 'next/image'

const Banner = () => {
  return (
    <div>
      <Image  src='/myimage.jpg' layout="responsive" width={100} height={45} />
    </div>
  )
}

export default Banner
