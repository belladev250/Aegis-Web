
'use client'
import React from 'react';
import Image from 'next/image';

import { useState } from 'react'
  
const Contact = () => {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('http://localhost:1337/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'partner-application',
          formData,
        }),
      })

      const data = await res.json()
      setResult(data.message)
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setResult('Failed to send.')
    } finally {
      setLoading(false)
    }
  
  } 
  
  return (
        <div className='relative z-40 min-h-screen bg-white'>
            {/* Scrollable content area */}
            <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    {/* Main content row */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-12">
                        {/* Left column - Contact info */}
                        <div className='lg:w-1/2 p-6'>
                            <h2 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-6 text-gray-900'>Keep in Touch</h2>
                            <p className='mb-4'>If you would like to: </p>
                            <div className='p-4'>
                                <ul className="list-disc ml-4 space-y-2">
                                    <li>Submit research materials for public viewing in our Library</li>
                                    <li>Join our network</li>
                                    <li>Submit details of an event or opportunity</li>
                                    <li>Apply for a research grant</li>
                                    <li>Submit a blog or opinion piece for publishing</li>
                                    <li>Receive our newsletter</li>
                                </ul>
                            </div>
                            <p className='mt-6 font-medium'>Departmental email: <span className='text-maroon'>rdpe@aegistrust.org.rw</span></p>
                        </div>

                        {/* Right column - Image */}
                        <div className='lg:w-1/2 flex items-center justify-center'>
                            <div className='w-full max-w-md'>
                                <Image
                                    src='/contact.png'
                                    alt='Contact illustration'
                                    height={500}
                                    width={500}
                                    className="w-full h-auto object-contain"
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Contact form section */}
                    <div className='bg-white mt-16'>
                        <h2 className='text-xl sm:text-2xl font-semibold mb-6 text-gray-900'>Send us a message</h2>

                        <form className='space-y-6 lg:w-1/3 sm:w-full' suppressHydrationWarning  onSubmit={handleSubmit}>
                            <div className='space-y-1'>
                                <label className='block text-gray-700'>
                                    Name <span className='text-maroon'>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent'
                                />
                            </div>

                            <div className='space-y-1'>
                                <label className='block text-gray-700'>
                                    Email <span className='text-maroon'>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent'
                                />
                            </div>

                            <div className='space-y-1'>
                                <label className='block text-gray-700'>
                                    Message <span className='text-maroon'>*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                     onChange={handleChange}
                                    name="message"
                                     value={formData.message}

                                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent'
                                ></textarea>
                            </div>

                            <div className='pt-2'>
                                <button
                                    type="submit"
                                    className='bg-maroon text-white px-6 py-3 rounded-md hover:bg-maroon-dark transition-colors duration-200'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;