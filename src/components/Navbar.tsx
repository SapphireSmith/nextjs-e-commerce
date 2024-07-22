import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import dynamic from 'next/dynamic'
// import NavIcons from './NavIcons'

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false })

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 '>
      {/* Mobile */}
      <div className='flex items-center justify-between h-full md:hidden'>
        <Link href={'/'} >
          <div className='text-2xl tracking-wide'>NEXT Shop</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger screen */}
      <div className='hidden md:flex items-center justify-center gap-8 h-full'>
        {/* Left */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
          <Link href={'/'} className='flex items-center gap-3'>
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className='text-2xl tracking-wide'>NEXT Shop</div>
          </Link>
          <div className='hidden xl:flex gap-4'>
            <Link href={"/"}>Homepage</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar