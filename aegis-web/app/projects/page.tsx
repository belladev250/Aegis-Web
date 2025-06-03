import Image from 'next/image';
import Link from 'next/link';
import FeaturedProject from './FeaturedProjects';

const ResearchProjects = () => {

    const featuredProjects = [
        {
            id: 'youth-physcial-and-mental-health',
            imageSrc: '/project-1.png',
            title: 'Building Cultures Of Peace In Rwandan Schools',
            funder: 'Anne',
            period: '2026'
        }
    ];

    return (
        <div className='relative z-40 min-h-screen bg-white'>
            <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
                <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    <div className='w-full lg:w-2/4 mb-8 space-y-4'>
                        <Link href="/research" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
                            ← AEGIS Research
                        </Link>
                        <h1 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>Research Projects</h1>
                        <p>Our research projects are aimed at answering diverse research questions giving the opportunity to study an area of interest in depth.
                            Under the Research and Engagement programme, different projects are run and administrated with the purpose to inform action, gather
                            evidence for theories, and contribute to develop knowledge on peace building and peace education.</p>
                        <Link href="" className='inline-block bg-maroon text-white px-4 py-2 lg:p-3 rounded-md hover:bg-maroon-dark transition-colors'>
                            Submit Research
                        </Link>
                    </div>
                    <div className='w-full lg:w-2/4 lg:mt-0 flex justify-center'>
                        <Image src='/projects.jpg' alt='Consultation Image' height={500} width={600} className='h-72 mt-8 w-full md:w-[70%] rounded-lg' priority />
                    </div>
                </div>

                {/* Section two */}
                <div className="container mx-auto flex flex-col lg:flex-row px-4 space-x-8 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                   
                    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed'>
                        <h1 className='text-xl sm:text-2xl font-semibold text-gray-900'>Projects</h1>
                        <div className='flex flex-col lg:flex-row gap-6 w-full mt-6'>
                            {featuredProjects.map(project => (
                                <FeaturedProject
                                    key={project.id}
                                    imageSrc={project.imageSrc}
                                    title={project.title}
                                    id={project.id}
                                    funder={project.funder}
                                    period={project.period}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ResearchProjects;