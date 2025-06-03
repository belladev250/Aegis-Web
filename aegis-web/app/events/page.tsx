import Image from 'next/image';
import Link from 'next/link';
import FeaturedEvent from './FeaturedEvent';

const AegisEvents = () => {

    const featuredEvents = [
        {
            id: 'youth-physcial-and-mental-health',
            imageSrc: '/event-1.jpg',
            title: 'Youth Physical and Mental Health after Genocidal Rape during the 1994 Genocide against the Tutsi in Rwanda'
        }
    ];

    return (
        <div className='relative z-40 min-h-screen bg-white'>
            <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
                <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    <div className='w-full lg:w-1/3 mb-8 space-y-2'>
                        <h1 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>Events</h1>
                        <p>Explore events around the research and policy community organized by Aegis Trust and other institutions
                            focused on genocide prevention and peacebuilding.</p>
                        <Link href="" className='inline-block bg-maroon text-white px-4 py-2 lg:p-3 rounded-md hover:bg-maroon-dark transition-colors'>
                            Submit Your Event
                        </Link>
                    </div>
                    <div className='w-full lg:w-2/3 mt-6 lg:mt-0 flex justify-center'>
                        <Image src='/event.jpg' alt='Consultation Image' height={500} width={600} className='h-64 w-full md:w-[70%] rounded-lg' priority />
                    </div>
                </div>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed'>
                    <h1 className='text-xl sm:text-2xl font-semibold text-gray-900'>Events</h1>
                    <div className='flex flex-col lg:flex-row gap-6 w-full mt-6'>
                        {featuredEvents.map(event => (
                            <FeaturedEvent
                                key={event.id}
                                imageSrc={event.imageSrc}
                                title={event.title}
                                id={event.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AegisEvents;