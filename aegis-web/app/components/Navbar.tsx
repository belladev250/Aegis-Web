'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className='fixed top-0 left-0 w-full z-50 bg-white scroll-smooth'>
<div className='flex justify-between items-center p-4'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link href='/'>
          <Image
            src='/aegisLogo.png'
            alt='Aegis Trust Logo'
            height={80}
            width={150}
            className='h-auto w-32 md:w-40'
            priority
          />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex text-sm space-x-6 text-navy mr-20 p-2'>
          <Link href="/" className='hover:text-maroon transition-colors duration-200'>Home</Link>
          <Link href="/about" className='hover:text-maroon transition-colors duration-200'>About Us</Link>
          <a href="#research" className="hover:text-maroon transition-colors duration-200">Aegis Research</a>
    <a href="#policy" className="hover:text-maroon transition-colors duration-200">Policy & Research</a>
    <a href="#involved" className="hover:text-maroon transition-colors duration-200">Get Involved</a>

          <Link href="/news" className='hover:text-maroon transition-colors duration-200'>News</Link>
          <Link href="/contact" className='hover:text-maroon transition-colors duration-200'>Contact Us</Link>
          
        </nav>


              {/* Mobile Menu Button */}
        <button
          className='md:hidden text-navy focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6'>
            <div className='flex flex-col space-y-4'>
              <Link href="/" className='text-navy hover:text-maroon transition-colors duration-200 py-2' onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className='text-navy hover:text-maroon transition-colors duration-200 py-2' onClick={() => setIsOpen(false)}>About</Link>
              <Link href="" className='text-navy hover:text-maroon transition-colors duration-200 py-2' onClick={() => setIsOpen(false)}>Aegis Research</Link>
              <Link href="" className='text-navy hover:text-maroon transition-colors duration-200 py-2' onClick={() => setIsOpen(false)}>Policy & Research</Link>
              <Link href="" className='text-navy hover:text-maroon transition-colors duration-200 py-2' onClick={() => setIsOpen(false)}>Get Involved</Link>
              <Link href="" className='text-navy hover:text-maroon transition-colors duration-200 py-2' onClick={() => setIsOpen(false)}>News</Link>
              <Link href="/contact" className='text-navy hover:text-maroon transition-colors duration-200 py-2' onClick={() => setIsOpen(false)}>Contact Us</Link>


           
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;