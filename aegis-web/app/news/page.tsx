import Image from 'next/image';
import Link from 'next/link';
import FeaturedArticle from './FeaturedArticle';

const NewsPage = () => {
  const featuredArticles = [
    {
      id: 'aegis-trust-empowers-researchers',
      imageSrc: '/n-one.png',
      title: 'Aegis Trust empowers Rwandan researchers to take lessons to the world'
    },
    {
      id: 'africa-kommit-fellowship-program',
      imageSrc: '/n-two.png',
      title: 'AFRIKA KOMMT! FELLOWSHIP PROGRAM 2016 – 2018'
    },
    {
      id: 'next-goal-for-seeds-of-peace',
      imageSrc: '/n-thre.png',
      title: 'Next goal for Seeds of Peace: Putting campers to work'
    }
  ];

  return ( 
    <div className='relative z-40 min-h-screen bg-white'>
      <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
        <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
          <div className='w-full lg:w-3/4'>
            <h1 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>News</h1>
            <p>This section presents news of activities organized around the Research, Policy and Higher Education (RPHE) programme
            but also what happens around the world, related to genocide and peacebuilding. The section also presents opportunities 
            including our research consultation campaigns, call for research proposals, conferences and research grants</p>
          </div>
          <div className='w-full lg:w-1/4 mt-6 lg:mt-0 flex justify-center'>
            <Image src='/consultation.png' alt='Consultation Image' height={500} width={600} className='h-auto w-64 md:w-96' priority />
          </div>
        </div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed'>
          <h1 className='text-xl sm:text-2xl font-semibold text-gray-900'>Featured Articles</h1>
          <div className='flex flex-col lg:flex-row gap-6 w-full mt-6'>
            {featuredArticles.map(article => (
              <FeaturedArticle
                key={article.id}
                imageSrc={article.imageSrc}
                title={article.title}
                id={article.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;