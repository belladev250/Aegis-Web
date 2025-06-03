import Image from 'next/image';
import Link from 'next/link';
import FeaturedPaper from './FeaturedPaper';

const WorkingPapers = () => {
    const featuredPapers = [
        {
            id: 'livehood-recovery-for-peace-and-reconciliation',
            imageSrc: '/papers.jpg',
            title: 'Livehood recovery for peace and reconciliation The case of Rukara Reconciliation Village'
        },
        {
            id: 'unfolding-the-lived-experience-of-children-born-of-genocidal-rape-in-rwanda',
            imageSrc: '/papers.jpg',
            title: 'Unfolding the lived experience of children born of genocidal rape in Rwanda'
        },
        {
            id: 'living-under-the-shadow-of-a-parents-criminal-past',
            imageSrc: '/papers.jpg',
            title: 'Living under the shadow of a parent’s criminal past: An exploration of the meaning of being a génocidaire’s'
        }
    ];

    return (
        <div className='relative z-40 min-h-screen bg-white'>
            <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
                <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
                    <div className='w-full lg:w-1/3 mb-8 space-y-2'>
                        <Link href="/research" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
                            ← AEGIS Research
                        </Link>
                        <h1 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>AEGIS Working Papers</h1>
                        <p>The followig research working papers were produced by Rwandan authors after their participation in the Aegis Trust programme on
                            Research, Policy and Higher Education (RPHE).</p>
                    </div>
                    <div className='w-full lg:w-2/3 mt-6 lg:mt-0 flex justify-center'>
                        <Image src='/papers.jpg' alt='Consultation Image' height={500} width={600} className='h-64 w-full md:w-[70%] rounded-lg' priority />
                    </div>
                </div>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed'>
                    <h2 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>Papers</h2>
                    <div className='flex flex-col lg:flex-row gap-6 w-full mt-6'>
                        {featuredPapers.map(paper => (
                            <FeaturedPaper
                                key={paper.id}
                                imageSrc={paper.imageSrc}
                                title={paper.title}
                                id={paper.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkingPapers;