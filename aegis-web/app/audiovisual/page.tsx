import Image from 'next/image';
import Link from 'next/link';
import FeaturedAudio from './FeaturedAudio';

const AudioVisual = () => {
    const featuredAudios = [
        {
            id: 'livehood-recovery-for-peace-and-reconciliation',
            imageSrc: '/about.png',
            title: 'Livelihood Recovery for Peace and Reconciliation',
            author : 'Bethiane',
            date : '21-07'
        },
        {
            id: 'unfolding-the-lived-experience-of-children-born-of-genocidal-rape-in-rwanda',
            imageSrc: '/about.png',
            title: 'International Impact Eventa',
            author : 'Anne',
            date : '23-08'
        },
        {
            id: 'living-under-the-shadow-of-a-parents-criminal-past',
            imageSrc: '/about.png',
            title: '20 Years Later: Rwanda’s Economic Transformation Since 1994',
            author : 'Felix',
            date : '12-09'
        }
    ];

    return (
        <div className='relative z-40 min-h-screen bg-white'>
            <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
                <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    <div className='w-full lg:w-1/3 mb-8 space-y-2'>
                        <Link href="/research" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
                            ← Policy & Practice
                        </Link>
                        <h1 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>Audiovisual</h1>
                        <p>The following presents audiovisuals related to policy</p>
                    </div>
                    <div className='w-full lg:w-2/3 mt-6 lg:mt-0 flex justify-center'>
                        <Image src='/audio.jpg' alt='Consultation Image' height={500} width={600} className='h-64 w-full md:w-[70%] rounded-lg' priority />
                    </div>
                </div>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed'>
                    <h2 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>Audiovisual</h2>
                    <div className='flex flex-col lg:flex-row gap-6 w-full mt-6'>
                        {featuredAudios.map(audio => (
                            <FeaturedAudio
                                key={audio.id}
                                imageSrc={audio.imageSrc}
                                title={audio.title}
                                id={audio.id}
                                author={audio.author}
                                date={audio.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioVisual;