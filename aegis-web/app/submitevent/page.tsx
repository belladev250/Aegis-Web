import React from 'react';

const SubmitResearchMaterial = () => {
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
                        <h2 className="text-lg leading-6 font-medium text-gray-900">Submission Guidelines</h2>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">1</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    We welcome any site visitor to submit research papers, policy briefs, policy documents, research-relevant audio visual materials and books to become publicly accessible on GRH.
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">2</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    We review submitted materials regularly and welcome a diverse range of materials that are relevant to the themes of this site and that meet a high academic standard.
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">3</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    If you do not have a file to attach, or if the distribution of the file would be a breach of copyright, then we still accept submissions that include a web link to the original document.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Research Submission Form */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-16">
                    <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Submit Research Material</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="research-title" className="block text-sm font-medium text-gray-700">
                                    Research Title
                                </label>
                                <input
                                    type="text"
                                    id="research-title"
                                    name="research-title"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                    Type
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                >
                                    <option>Research Paper</option>
                                    <option>Policy Brief</option>
                                    <option>Policy Document</option>
                                    <option>Audio Visual Material</option>
                                    <option>Book</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700">
                                    Additional information (optional)
                                </label>
                                <textarea
                                    id="additional-info"
                                    name="additional-info"
                                    rows={4}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-maroon-500 focus:border-maroon-500"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Theme
                                </label>
                                <div className="space-y-2">
                                    {[
                                        "Education",
                                        "Transitional justice",
                                        "Media",
                                        "Neocorrelation and social cohesion",
                                        "Peace education",
                                        "Gender dimensions of past-genocide recovery",
                                        "Peer-genocide economic development",
                                        "Memory, identity and narrative"
                                    ].map((theme) => (
                                        <div key={theme} className="flex items-center">
                                            <input
                                                id={`theme-${theme.toLowerCase().replace(/\s+/g, '-')}`}
                                                name="theme"
                                                type="radio"
                                                className="h-4 w-4 text-maroon-600 focus:ring-maroon-500"
                                            />
                                            <label htmlFor={`theme-${theme.toLowerCase().replace(/\s+/g, '-')}`} className="ml-3 block text-sm text-gray-700">
                                                {theme}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-maroon hover:bg-maroon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon-500"
                                >
                                    Submit Material
                                </button>
                            </div>
                        </form>
                    </div>
                </div>



                {/* Info Box */}
                <div className="mt-10 bg-maroon border-l-4 border-maroon p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-maroon-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-white-700">
                                Have questions about submissions? <a href="/contact" className="font-medium text-white-700 underline hover:text-white-600">Contact our team</a> for more information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitResearchMaterial;