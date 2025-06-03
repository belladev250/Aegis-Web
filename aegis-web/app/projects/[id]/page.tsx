'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import projects from '../../data/projects';

const ProjectPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const project = projects.find(project => project.id === id);

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-[#F7F2F2]'>
        <div className='text-center p-6 max-w-md mx-auto'>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Project not found</h1>
          <Link 
            href="/projects" 
            className='mt-4 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='relative z-40 min-h-screen bg-white'>
      <div className='overflow-y-auto h-full pt-20 md:pt-24 lg:pt-32'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 font-sans text-gray-800 leading-relaxed">

          {/* Hero section with image and intro */}
          <div className='w-full mb-8 md:mb-12 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12'>
            <div className='w-full md:w-1/2 lg:w-1/2'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900'>
                {project.title}
              </h1>
              {project.intro && (
                <div className='space-y-4 text-base md:text-lg'>
                  {project.intro.map((paragraph, index) => (
                    <p key={index} className='leading-relaxed'>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2'>
              <div className="relative aspect-video w-full h-auto rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Section two */}
          {project.heading2 && (
            <div className='w-full mt-8 md:mt-12'>
              <h2 className='text-xl sm:text-2xl font-bold mb-6 text-gray-900'>
                {project.heading2}
              </h2>

              <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8'>
                {project.content2 && project.content2.length > 0 && (
                  <>
                    <div className='w-full md:w-1/2 space-y-4 border border-gray-200 rounded-lg p-4 md:p-6 bg-white shadow-sm'>
                      <h3 className='text-lg font-semibold text-gray-900'>{project.content2[0]}</h3>
                      <p className='text-gray-700'>{project.content2[1]}</p>
                    </div>
                    <div className='w-full md:w-1/2 space-y-4 border border-gray-200 rounded-lg p-4 md:p-6 bg-white shadow-sm'>
                      <h3 className='text-lg font-semibold text-gray-900'>{project.content2[2]}</h3>
                      <p className='text-gray-700'>{project.content2[3]}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Section three */}
          {project.heading3 && (
            <div className='w-full mt-8 md:mt-12'>
              <h2 className='text-xl sm:text-2xl font-bold mb-6 text-gray-900'>
                {project.heading3}
              </h2>

              <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8'>
                {project.content3 && project.content3.length > 0 && (
                  <>
                    <div className='w-full md:w-1/2 space-y-4 border border-gray-200 rounded-lg p-4 md:p-6 bg-white shadow-sm'>
                      <h3 className='text-lg font-semibold text-gray-900'>{project.content3[0]}</h3>
                      <p className='text-gray-700'>{project.content3[1]}</p>
                    </div>
                    <div className='w-full md:w-1/2 space-y-4 border border-gray-200 rounded-lg p-4 md:p-6 bg-white shadow-sm'>
                      <h3 className='text-lg font-semibold text-gray-900'>{project.content3[2]}</h3>
                      <p className='text-gray-700'>{project.content3[3]}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Back link */}
          <Link 
            href="/projects" 
            className='mt-8 md:mt-12 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'
          >
            ← Back to Aegis Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;