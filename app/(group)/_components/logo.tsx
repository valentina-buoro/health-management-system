import React from 'react'
import Image from 'next/image'
import PharmacyLogo from '../../../public/pharmacy-logo.jpeg'

const Logo = () => {
  return (
    <Image
    height={60}
    width={60}
    alt='logo'
    src={PharmacyLogo}
    />
  )
}

export default Logo