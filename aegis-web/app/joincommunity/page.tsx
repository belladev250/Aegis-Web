import Image from 'next/image';

const JoinCommunity = () => {
  return (
    <div className='relative z-40 min-h-screen bg-white'>
      <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
        <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
          <div className='w-full lg:w-1/3 mb-8 space-y-2'>
            <h1 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>Join Community</h1>
            <p>By filling this form, your profile will be added to the Hub Member Directory. You will also get an opportunity to relate to research 
              for policy on peacebuilding, engage in dialogue, share experiences, exchange knowledge and otherwise network with our Community</p>
          </div>
          <div className='w-full lg:w-2/3 mt-6 lg:mt-0 flex justify-center'>
            <Image src='/chat.jpg' alt='Consultation Image' height={500} width={600} className='h-64 w-full md:w-[70%] rounded-lg' priority />
          </div>
        </div>

        {/* Form Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#F7F2F2]">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Join Our Community</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Occupation</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="mt-1 space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="female" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Female</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="female" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Male</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Area of Interest</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>Research Material</option>
                  <option>Seminar</option>
                  <option>Grants</option>
                  <option>Workshops</option>
                  <option>Contibute</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Field of Expertise</label>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Transitional Justice",
                    "Decolonization and Social Justice",
                    "Gender issues",
                    "Peacebuilding",
                    "Memory",
                    "Identity And Narrative",
                    "Psychological Issues",
                    "Governance",
                    "Centric Management",
                    "Human Rights",
                    "Education",
                    "Community Development",
                    "Other"
                  ].map((field) => (
                    <label key={field} className="inline-flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">{field}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700">Desired Education</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div> */}

              <div className="pt-4">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-maroon hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Share
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;