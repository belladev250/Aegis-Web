'use client';

import { useParams } from 'next/navigation';
import papers from '../../data/papers';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const PaperPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const paper = papers.find(paper => paper.id === id);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!paper?.pdfUrl) {
      setLoading(false);
      return;
    }

    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Verify PDF exists
        const response = await fetch(paper.pdfUrl);
        if (!response.ok) {
          throw new Error('PDF not found');
        }

        // For direct PDF display
        if (iframeRef.current) {
          iframeRef.current.src = paper.pdfUrl;
        }
        
        setLoading(false);
      } catch (err) {
        console.error('PDF loading error:', err);
        setError('Failed to load PDF preview. Please try downloading the document instead.');
        setLoading(false);
      }
    };

    loadPDF();
  }, [paper?.pdfUrl]);

  if (!paper) {
    return (
      <div className='relative z-40 flex items-center justify-center p-4 '>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Paper not found</h1>
          <Link href="/research" className='mt-4 inline-block text-maroon font-bold'>
            ← Go to Research
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='relative z-40 min-h-screen bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-32'>

        {/* Paper header section */}
        <div className="flex flex-col md:flex-row gap-8 p-6 mb-8 border border-lg rounded-lg">
          {/* Image container - responsive sizing */}
          <div className='w-full md:w-1/3 lg:w-1/4'>
            <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md'>
              <Image
                src={paper.imageSrc}
                alt={paper.title}
                fill
                className='object-cover'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Paper details - responsive text sizing */}
          <div className='w-full md:w-2/3 lg:w-3/4'>
            <h1 className='text-md sm:text-lg md:text-xl font-bold mb-4 text-gray-900'>{paper.title}</h1>
            <div className='space-y-1'>
              <p className='text-base sm:text-md'><span className='font-semibold'>Author:</span> {paper.author}</p>
              <p className='text-base sm:text-md'><span className='font-semibold'>Journal:</span> {paper.journal}</p>
              <p className='text-base sm:text-md'><span className='font-semibold'>Published:</span> {paper.date}</p>
            </div>
            <div className='mt-6'>
              <Link 
                href={paper.pdfUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center bg-maroon text-white px-5 py-3 rounded-md hover:bg-maroon-dark transition-colors text-sm sm:text-base'
                download
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download this document
              </Link>
            </div>
          </div>
        </div>

        {/* PDF Preview section */}
        <div className='mt-8 mb-12'>
          <h2 className='text-xl sm:text-2xl font-bold mb-4 text-gray-800'>Preview</h2>
          
          {loading && (
            <div className="flex flex-col items-center justify-center h-48 rounded-lg bg-gray-50">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-maroon"></div>
              <span className="mt-3 text-gray-600">Loading PDF preview...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    {error}
                    <br />
                    <span className="font-medium">Debug info:</span> PDF Path: {paper.pdfUrl}
                  </p>
                </div>
              </div>
            </div>
          )}

          {!error && !loading && (
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <iframe
                ref={iframeRef}
                className="w-full min-h-[90vh]"
                title="PDF Preview"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Back button at bottom */}
        <div className='mt-8 border-t border-gray-200 pt-6'>
          <Link href="/papers" className='inline-flex items-center text-maroon font-bold hover:text-maroon-dark transition-colors'>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Working Papers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaperPage;