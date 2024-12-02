import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav  className='h-[10vh] bg-purple-700 flex justify-between items-center text-white p-4'>
        <div className='logo font-bold text-2xl'>
                
                <Link href="/"><li>Bitshot</li></Link>
            </div>
        <ul className='flex justify-center gap-4 items-center'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <li className='flex gap-3'>
                <Link href="/shorten"><button className='btnn bg-purple-400 shadow-lg p-3 py-1 rounded-lg font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='btnn bg-purple-400 shadow-lg p-3 py-1 rounded-lg font-bold'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
} 

export default Navbar