import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProjectProps {
  id: string;
  imageSrc: string;
  title: string;
  funder : string;
  period: string;
}

const FeaturedArticle = ({ imageSrc, title, id, funder, period}: FeaturedProjectProps) => {
  return (
    <div className='w-full lg:w-1/2 xl:w-1/2 border-2 border-solid p-6 border-gray-200 rounded-md hover:shadow-lg transition-shadow'>
      <div className='relative h-48 w-full mb-4'>
        <Image 
          src={imageSrc} 
          alt='Project Image' 
          fill
          className='object-cover rounded-md'
        />
      </div>
      <p className='text-lg font-medium mb-4'>{title}</p>
      <p className='text-md mb-4'>Funder: {funder}</p>
      <p className='text-md mb-4'>Period: {period}</p>
      <Link 
        href={`/projects/${id}`} 
        className='text-maroon hover:text-maroon-dark transition-colors duration-200 font-bold'
      >
        Read More →
      </Link>
    </div>
  );
};

export default FeaturedArticle;