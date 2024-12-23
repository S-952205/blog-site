import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './modeToggle'

const Navbar = () => {
  return (
     <nav className='w-full max-w-4xl mx-auto px-4 py-5 flex flex-row justify-between'>
       <Link href={'/'} className='font-bold text-3xl'>
       Insight<span className='text-primary'>Blog</span></Link>
       
       <ModeToggle/>
     </nav>
  )
}

export default Navbar
