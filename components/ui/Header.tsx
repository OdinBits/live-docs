import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <Link className="md:flex-1" href="/">
                <Image src={''} alt={''}/>
            </Link>
        </div>
    )
}

export default Header
  