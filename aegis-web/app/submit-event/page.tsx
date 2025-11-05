'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SubmitEvent() {
    const [formData, setFormData] = useState<{
        eventTitle: string;
        briefDescription: string;
        organizer: string;
        email: string;
        phoneNumber: string;
        conceptNote: File | null;
    }>({
        eventTitle: '',
        briefDescription: '',
        organizer: '',
        email: '',
        phoneNumber: '',
        conceptNote: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e:any) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            conceptNote: file
        }));
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        try {
            // Here you would typically send the data to your API
            console.log('Form data:', formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            alert('Event submitted successfully!');
            
            // Reset form
            setFormData({
                eventTitle: '',
                briefDescription: '',
                organizer: '',
                email: '',
                phoneNumber: '',
                conceptNote: null
            });
            
            // Reset file input
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement | null;
            if (fileInput) fileInput.value = '';
            
        } catch (error) {
            alert('Error submitting event. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative z-40 min-h-screen bg-white">
            <div className="items-center justify-center p-24">
                <div className="flex justify-between flex-col lg:flex-row mt-20">
                    <div className='w-full lg:w-1/2 mb-8 space-y-4'>
                        <h1 className='text-2xl sm:text-3xl mb-4 lg:mb-5 text-gray-900'>
                            Submit Event
                        </h1>
                        <p>Please let us know about an event you are hosting that is relevant to peacebuilding research, policy or practice.
                            We will publish your event details on our events page and share it with our network.</p>
                    </div>
                    <div className='w-full lg:w-1/2 flex justify-center'>
                        <Image
                            src="/community.png"
                            alt="Capacity Building"
                            height={600}
                            width={600}
                            className='h-64 w-full md:w-[70%] rounded-lg'
                            priority
                        />
                    </div>
                </div>

                {/* Event Submission Form */}
                <div className="mt-16">
                    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
                        {/* Event Title */}
                        <div className="mb-6">
                            <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                Event Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="eventTitle"
                                name="eventTitle"
                                value={formData.eventTitle}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your event title"
                            />
                        </div>

                        {/* Brief Description */}
                        <div className="mb-6">
                            <label htmlFor="briefDescription" className="block text-sm font-medium text-gray-700 mb-2">
                                Brief Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="briefDescription"
                                name="briefDescription"
                                value={formData.briefDescription}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                                placeholder="Provide a detailed description of your event..."
                            />
                        </div>

                        {/* Organizer */}
                        <div className="mb-6">
                            <label htmlFor="organizer" className="block text-sm font-medium text-gray-700 mb-2">
                                Organizer <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="organizer"
                                name="organizer"
                                value={formData.organizer}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Organization or individual name"
                            />
                        </div>

                        {/* Email and Phone Number Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>
                        </div>

                        {/* Concept Note Attachment */}
                        <div className="mb-8">
                            <label htmlFor="conceptNote" className="block text-sm font-medium text-gray-700 mb-2">
                                Concept note (Attachment) <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="conceptNote" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                            <span>Upload a file</span>
                                            <input
                                                id="conceptNote"
                                                name="conceptNote"
                                                type="file"
                                                required
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx,.txt"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PDF, DOC, DOCX, TXT up to 100MB</p>
                                    {formData.conceptNote && (
                                        <p className="text-sm text-green-600 mt-2">
                                            Selected: {formData.conceptNote.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-3 rounded-md text-white font-medium text-sm transition-all duration-200 ${
                                    isSubmitting 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </div>
                                ) : (
                                    'Submit event'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}