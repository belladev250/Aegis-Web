'use client'
import React, { useState } from 'react';

const SubmitResearchMaterial = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        researchTitle: '',
        type: 'Research Paper',
        additionalInfo: '',
        theme: '',
        file: null as File | null,
    })

    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState('')

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFileChange = (e: any) => {
        const file = e.target.files?.[0]
        if (file) {
            setFormData({ ...formData, file })
        }
    }




   const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setResult('')

    try {
        const formDataToSend = new FormData()
        formDataToSend.append('formType', 'research-material-submission')
        formDataToSend.append('formData', JSON.stringify({
            'First Name': formData.firstName,
            'Last Name': formData.lastName,
            'Email': formData.email,
            'Phone': formData.phone,
            'Research Title': formData.researchTitle,
            'Type': formData.type,
            'Additional Info': formData.additionalInfo,
            'Theme': formData.theme,
        }))
        
        if (formData.file) {
            formDataToSend.append('file', formData.file)
        }

        const res = await fetch('http://localhost:1337/api/send-form', {
            method: 'POST',
            body: formDataToSend, // No headers needed
        })

        const data = await res.json()
        setResult(data.message || 'Submission successful!')
        
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            researchTitle: '',
            type: 'Research Paper',
            additionalInfo: '',
            theme: '',
            file: null,
        })
        
        const fileInput = document.getElementById('file-upload') as HTMLInputElement
        if (fileInput) fileInput.value = ''
        
    } catch (error) {
        setResult('Failed to submit. Please try again.')
    } finally {
        setLoading(false)
    }
}

    return (
        <div className="relative z-40 min-h-screen bg-white mt-16 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Submission Guidelines Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Submit Research Material</h1>
                    <p className="text-lg text-gray-600">Contribute to our growing repository of knowledge</p>
                </div>

                {/* Submission Guidelines Section */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 bg-gray-50">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">Please note the following</h2>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <div className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:gap-4 sm:px-6">
                                1. We welcome any site visitor to submit research papers, policy briefs, policy documents, research-relevant audio visual materials and books to become publicly accessible on GRH.
                            </div>
                            <div className="py-4 sm:py-5 sm:gap-4 sm:px-6">
                                2. We review submitted materials regularly and welcome a diverse range of materials that are relevant to the themes of this site and that meet a high academic standard.
                            </div>
                            <div className="py-4 sm:py-5 sm:gap-4 sm:px-6">
                                3. If you do not have a file to attach, or if the distribution of the file would be a breach of copyright, then we still accept submissions that include a web link to the original document.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Result Message */}
                {result && (
                    <div className={`mt-6 p-4 rounded-md ${result.includes('Failed') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
                        {result}
                    </div>
                )}

                {/* Research Submission Form */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-16">
                    <div className="px-4 py-5 sm:p-6">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">Submit Research Material</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                        First name <span className="text-maroon">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                        Last name <span className="text-maroon">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email <span className="text-maroon">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone <span className="text-maroon">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="researchTitle" className="block text-sm font-medium text-gray-700">
                                    Research Title <span className="text-maroon">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="researchTitle"
                                    name="researchTitle"
                                    required
                                    value={formData.researchTitle}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                    Type <span className="text-maroon">*</span>
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    required
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                >
                                    <option>Research Paper</option>
                                    <option>Policy Brief</option>
                                    <option>Policy Document</option>
                                    <option>Audio Visual Material</option>
                                    <option>Book</option>
                                    <option>Blog</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                                    Additional information (optional)
                                </label>
                                <textarea
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    rows={4}
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Theme <span className="text-maroon">*</span>
                                </label>
                                <div className="space-y-2">
                                    {[
                                        "Education",
                                        "Transitional justice",
                                        "Media",
                                        "Reconciliation and social cohesion",
                                        "Peace education",
                                        "Gender dimensions of past-genocide recovery",
                                        "Post-genocide economic development",
                                        "Memory, identity and narrative",
                                        "Trauma and psychological and psycho-social issues",
                                        "Peacebuilding"
                                    ].map((theme) => (
                                        <div key={theme} className="flex items-center">
                                            <input
                                                id={`theme-${theme.toLowerCase().replace(/\s+/g, '-')}`}
                                                name="theme"
                                                type="radio"
                                                required
                                                value={theme}
                                                checked={formData.theme === theme}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-maroon-600 focus:ring-maroon-500"
                                            />
                                            <label htmlFor={`theme-${theme.toLowerCase().replace(/\s+/g, '-')}`} className="ml-3 block text-sm text-gray-700">
                                                {theme}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                                    Upload files (optional)
                                </label>
                                <input 
                                    type="file" 
                                    id="file-upload"
                                    name="research" 
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-maroon file:text-white hover:file:bg-maroon-dark"
                                />
                                {formData.file && (
                                    <p className="text-sm text-gray-600">Selected: {formData.file.name}</p>
                                )}
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-maroon hover:bg-maroon-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Submitting...' : 'Submit Material'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Info Box */}
                <div className="mt-10 bg-grey border-l-4 border-maroon p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-maroon-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-gray-700">
                                Have questions about submissions? <a href="/contact" className="font-medium text-maroon underline hover:text-maroon-dark">Contact our team</a> for more information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitResearchMaterial;