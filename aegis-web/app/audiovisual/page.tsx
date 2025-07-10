'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeaturedAudio from './FeaturedAudio';

const AudioVisual = () => {
    const [featuredAudios, setFeaturedAudios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAudiovisuals = async () => {
            try {
                setLoading(true);
                // Replace 'your-strapi-url' with your actual Strapi URL
                const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/audiovisuals?populate=*`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch audiovisuals');
                }
                const data = await response.json();
               console.log('Raw Strapi data:', data.data);

                
                // Transform Strapiata to match your component's expected format
                  
                const transformedData = data.data.map(item => {
    const imageUrl = item.Image?.url || item.Image?.data?.attributes?.url;

    return {
        id: String(item.id),
        title: item.Title || 'Untitled',
        author: item.Author || 'Unknown Author',
        journal: item.Journal || 'No Journal',
        date: item.Date || 'No Date',
        audioUrl: item.AudioUrl || '',
        imageSrc: imageUrl
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`
            : ''
    };
});

                
                setFeaturedAudios(transformedData);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching audiovisuals:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAudiovisuals();
     

    }, []);

    // Loading state
    if (loading) {
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
                        <div className='flex justify-center items-center h-32'>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-maroon'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

  
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
                    
                    {featuredAudios.length === 0 ? (
                        <div className='flex justify-center items-center h-32'>
                            <p className='text-gray-500'>No audiovisuals found.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-6">
  {featuredAudios.map(audio => (
    <FeaturedAudio
      key={audio.id}
      imageSrc={audio.imageSrc}
      title={audio.title}
      id={audio.id}
      author={audio.author}
      date={audio.date}
      journal={audio.journal}
      audioUrl={audio.audioUrl}
    />
  ))}
</div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default AudioVisual;