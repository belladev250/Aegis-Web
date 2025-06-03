import Image from 'next/image';
import Link from 'next/link';

interface FeaturedAudioProps {
    id: string;
    imageSrc: string;
    title: string;
    author: string;
    date: string;
}

const FeaturedAudio = ({ imageSrc, title, id, author, date }: FeaturedAudioProps) => {
    return (
        <div className='w-full lg:w-1/2 xl:w-1/3 border-2 border-solid p-6 border-gray-200 rounded-md hover:shadow-lg transition-shadow'>
            <div className='relative h-48 w-full mb-4'>
                <Image
                    src={imageSrc}
                    alt='Audio Image'
                    fill
                    className='object-cover rounded-md'
                />
            </div>
            <p className='text-lg font-medium mb-4'>{title}</p>
            <p className='text-sm font-regular mb-4'>Author: {author}</p>
            <p className='text-sm font-regular mb-4'>Date of Production: {date}</p>
            <Link
                href={`/audiovisual/${id}`}
                className='text-maroon hover:text-maroon-dark transition-colors duration-200 font-bold'
            >
                Read More →
            </Link>
        </div>
    );
};

export default FeaturedAudio;