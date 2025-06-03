import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <div className='relative z-40 min-h-screen bg-[#F7F2F2]'>
            <div className="">
            {/* Scrollable content area */}
            <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
                <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    {/* Navigation - Stays on left */}
                    <div className="lg:w-1/4 mb-8 lg:mb-0">
                        <nav className="space-y-3 py-3 border-b lg:border-b-0 lg:border-r border-gray-200">
                            <Link href="/about" className="block text-maroon font-bold px-1 py-1 relative 
                                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black 
                                after:transition-all after:duration-300 hover:after:w-full">
                                About us
                            </Link>
                            <Link href="/community" className="block text-gray-800 font-medium px-1 py-1 relative 
                                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black 
                                after:transition-all after:duration-300 hover:after:w-full">
                                Our community
                            </Link>
                            <Link href="/team" className="block text-gray-800 font-medium px-1 py-1 relative 
                                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black 
                                after:transition-all after:duration-300 hover:after:w-full">
                                Our team
                            </Link>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4 lg:pl-8">
                        {/* About Us Section */}
                        <div className='flex flex-col lg:flex-row gap-8 mb-8 lg:mb-12'>
                            <div className="lg:w-2/3">
                                <h1 className="text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900">About us</h1>
                                <p className="mb-4">
                                    Policy and practice on peacebuilding is most effective when it is rooted in a clear understanding of research and evidence.
                                    The Genocide Research Hub aims to contribute to building a knowledge society around genocide prevention and peacebuilding
                                    policy and practice in Rwanda. This hub was established in 2018 as a global knowledge exchange platform for researchers,
                                    policymakers, and practitioners, and is primarily focused on the Rwandan situation, placed in regional and global context.
                                </p>
                            </div>

                            <div className='lg:w-1/3'>
                                <Image
                                    src='/about.png'
                                    alt='About illustration'
                                    height={300}
                                    width={500}
                                    className="w-full h-auto object-cover"
                                    layout="responsive"
                                />
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="bg-gray-50 p-6 sm:p-8 my-6 lg:my-8">
                            <blockquote className="italic text-base sm:text-lg mb-3">
                                " A knowledge society differs from an information society in that the former serves to transform information into
                                resources that allow society to take effective action while the latter only creates and disseminates the raw data
                            </blockquote>
                            <cite className="block text-right not-italic text-gray-600">Cristiano Castelfranchi (2007)</cite>
                        </div>

                        {/* Two-column sections */}
                        <div className='flex flex-col lg:flex-row gap-8 mt-8 lg:mt-12'>
                            <div className="lg:w-1/2">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Aegis Trust</h2>
                                <p className="mb-4">
                                    Aegis Trust is an international organisation that originated in the UK in 2000. Its mission is to work towards the prediction,
                                    prevention and ultimately the elimination of genocide for the benefit of humanity, primarily through research, education and
                                    the dissemination of information and advice. In 2002, Aegis Trust was invited to work with Rwandan authorities to establish
                                    the Kigali Genocide Memorial which opened in 2004. Rwanda has remained the largest country involvement for Aegis Trust up
                                    to the present, although Aegis plans to bring the lessons and inspiration of Rwandan peacebuilding experiences to other
                                    countries in east and central Africa as part of its regional strategy. Click here to learn more on Aegis Trust.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Genocide Research Hub</h2>
                                <p className="mb-4">
                                    The hub contains a collection of quality research, policy briefs, a directory of actors, and a section on news relating to
                                    Rwanda peacebuilding-related events. Its policy and practice section is specifically designed for policymakers and practitioners
                                    and includes new publications, policies and events. More broadly, the world news section keeps track of genocide and mass
                                    atrocities in Africa and around the world. A newsletter distributes high-quality information and news about policy-relevant
                                    research and events; please click here to register for our regular newsletter and join our community.
                                </p>
                            </div>
                        </div>

                        {/* Research, Policy & Higher Education */}
                        <div className='flex flex-col lg:flex-row gap-8 mt-8 lg:mt-12'>
                            <div className="lg:w-1/2">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Research, Policy & Higher Education</h2>
                                <p className="mb-4">
                                    The Genocide Research Hub is run by the Research, Policy and Higher Education (RPHE) programme, part of Aegis Trust's
                                    Genocide Research and Reconciliation programme which is funded by the Department for International Development of the United Kingdom.
                                    The programme informs policy and practice on peacebuilding and genocide prevention in Rwanda with evidence, and it also supports
                                    the Rwandan research community as they provide and communicate this evidence. RPHE works in partnership with Rwandan researchers,
                                    policymakers and practitioners.
                                </p>
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Call for quality research material</h2>
                                <p className="mb-4">
                                    At the Genocide Research Hub, we encourage the submission of research, policy briefs, policy documents, audio visual materials and
                                    books for inclusion in our publicly available library of materials. Please click here to submit research materials. The material
                                    submitted for publication on the Genocide Research Hub undergoes a strict quality control process to ensure that selected content
                                    is of high academic quality. We welcome a variety of perspectives within the themes covered by this site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;