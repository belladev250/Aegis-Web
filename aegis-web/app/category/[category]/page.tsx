'use client'
// app/category/[category]/page.js
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category;
  
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Category mapping with dynamic content
  const getCategoryContent = (slug) => {
    switch(slug) {
      case 'working-papers':
        return {
          title: 'AEGIS Working Papers',
          description: 'The following research working papers were produced by Rwandan authors after their participation in the Aegis Trust programme on Research, Policy and Higher Education (RPHE).',
          image: '/papers.jpg',
          imageAlt: 'Working Papers Image'
        };
      case 'policy-briefs':
        return {
          title: 'AEGIS Policy Briefs',
          description: 'Comprehensive policy briefs that translate research findings into actionable recommendations for policymakers and stakeholders in Rwanda and the broader East African region.',
         image: '/papers.jpg',
          imageAlt: 'Policy Briefs Image'
        };
      case 'journal-articles':
        return {
          title: 'RPHE Journal Articles',
          description: 'Peer-reviewed journal articles published by researchers who participated in the Research, Policy and Higher Education programme, contributing to academic discourse and knowledge advancement.',
         image: '/papers.jpg',
          imageAlt: 'Journal Articles Image'
        };
      case 'research-projects':
        return {
          title: 'Research Projects',
          description: 'Ongoing and completed research projects conducted under the AEGIS Trust programme, focusing on critical issues in policy, education, and social development.',
          image: '/papers.jpg',
          imageAlt: 'Research Projects Image'
        };
      case 'research-events':
        return {
          title: 'Aegis Research Events',
          description: 'Documentation and resources from conferences, workshops, seminars, in form of audio visuals',
          image: '/papers.jpg',
          imageAlt: 'research events'
        };

      default:
        return {
          title: 'Documents',
          description: 'Browse through our collection of research documents and publications.',
         image: '/papers.jpg',
          imageAlt: 'Documents Image'
        };
    }
  };

  const categoryContent = getCategoryContent(categorySlug);

  useEffect(() => {
    async function fetchDocuments() {
      setIsLoading(true);
      
      try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL ;
        
        // Fetch all documents with related data
        const url = `${strapiUrl}/api/media-assets?populate=*&pagination[page]=1&pagination[pageSize]=100`;
        console.log('Fetching all documents from:', url);
        
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('Raw API response:', data);
        
        // Process the data
        let allDocs = data.data || [];
        
        // Log how many documents we got
        console.log('Found total documents:', allDocs.length);
        
        // Map the data to a simpler structure
        const formattedData = allDocs.map((item:any) => {
          console.log('Document item:', item);
          
          // Handle both structures: flat or nested under attributes
          const docData = item.attributes || item;
          
          // Find the document URL if it exists
          let documentFileUrl = null;
          let documentFileName = "Document";
          let coverImg='Image'
          let coverUrl= null

          if(docData.coverImg){
            const cover = docData.coverImg;
            
            if (cover.data && Array.isArray(cover.data) && cover.data[0]?.attributes?.url) {
              // Nested structure from Strapi
              coverUrl = cover.data[0].attributes.url;
              coverImg = cover.data[0].attributes.name || "Document";
            } else if (cover.data && cover.data?.attributes?.url) {
              // Single nested object
              coverUrl = cover.data.attributes.url;
              coverImg = cover.data.attributes.name || "Document";
            } else if (cover.url) {
              // Direct URL structure
             coverImg = cover.url;
             coverUrl = cover.name || "Document";
            } else {
              // Handle flat structure directly
            coverImg= cover.url;
              coverUrl = cover.name || "Document";
            }

          }
          
          if (docData.DocumentFile) {
            const fileData = docData.DocumentFile;
            
            if (fileData.data && Array.isArray(fileData.data) && fileData.data[0]?.attributes?.url) {
              // Nested structure from Strapi
              documentFileUrl = fileData.data[0].attributes.url;
              documentFileName = fileData.data[0].attributes.name || "Document";
            } else if (fileData.data && fileData.data?.attributes?.url) {
              // Single nested object
              documentFileUrl = fileData.data.attributes.url;
              documentFileName = fileData.data.attributes.name || "Document";
            } else if (fileData.url) {
              // Direct URL structure
              documentFileUrl = fileData.url;
              documentFileName = fileData.name || "Document";
            } else {
              // Handle flat structure directly
              documentFileUrl = fileData.url;
              documentFileName = fileData.name || "Document";
            }
          }
          
          // Get document type
          let documentType = "";
          if (docData.document_type?.data?.attributes?.name) {
            // Nested structure
            documentType = docData.document_type.data.attributes.name;
          } else if (docData.document_type?.name) {
            // Simple object
            documentType = docData.document_type.name;
          } else if (docData.document_type?.DocumentType) {
            // Your specific data structure
            documentType = docData.document_type.DocumentType;
          }
          
          return {
            id: item.id || docData.id,
            title: docData.Title || 'Untitled Document',
            author: docData.Author || '',
            coverImg: coverImg || '',
            coverUrl : coverUrl || '',
            publisher: docData.Publisher || '',
            documentType: documentType,
            documentId: docData.documentId || '',
            publicationDate: docData.publicationDate || '',
            documentFileUrl: documentFileUrl,
            documentFileName: documentFileName,
            slug: docData.slug || docData.Title?.toLowerCase().replace(/\s+/g, '-') || `doc-${item.id}`,
          };
        });
        
        console.log('Formatted data:', formattedData);
        
        // Filter by category if needed
        let filteredDocs = formattedData;
        // Normalize string safely
        const normalize = (str: string) => str?.toLowerCase().trim();

        if (categorySlug === 'working-papers') {
          filteredDocs = formattedData.filter((doc: any) =>
            normalize(doc.documentType).includes('working')
          );
        } else if (categorySlug === 'policy-briefs') {
          filteredDocs = formattedData.filter((doc: any) =>
            normalize(doc.documentType).includes('brief')
          );
        } else if (categorySlug === 'journal-articles') {
          filteredDocs = formattedData.filter((doc: any) =>
            normalize(doc.documentType).includes('journal')
          );
        } else if (categorySlug === 'research-projects') {
          filteredDocs = formattedData.filter((doc: any) =>
            normalize(doc.documentType).includes('research project')
          );
        } else if (categorySlug === 'research-events') {
          filteredDocs = formattedData.filter((doc: any) =>
            normalize(doc.documentType).includes('events')
          );
        }
        
        console.log('Filtered documents:', filteredDocs);
        setDocuments(filteredDocs);

      } catch (err:any) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchDocuments();
  }, [categorySlug]);
  
  if (isLoading) return <div className="p-8 text-center">Loading...</div>;
  
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return (
    <div className='relative z-40 min-h-screen bg-white'>
      <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
        <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
          <div className='w-full lg:w-1/3 mb-8 space-y-2'>
            <Link href="/research" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
              ← AEGIS Research
            </Link>
            <h1 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>
              {categoryContent.title}
            </h1>
            <p>{categoryContent.description}</p>
          </div>
          <div className='w-full lg:w-2/3 mt-6 lg:mt-0 flex justify-center'>
            <Image 
              src={categoryContent.image} 
              alt={categoryContent.imageAlt} 
              height={500} 
              width={600} 
              className='h-64 w-full md:w-[70%] rounded-lg' 
              priority 
            />
          </div>
        </div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed'>
          <h2 className='text-2xl sm:text-3xl font-semibold mb-4 lg:mb-5 text-gray-900'>
            {categorySlug === 'working-papers' ? 'Papers' :
             categorySlug === 'policy-briefs' ? 'Policy Briefs' :
             categorySlug === 'journal-articles' ? 'Articles' :
             categorySlug === 'research-projects' ? 'Projects' :
             categorySlug === 'research-events' ? 'Events' : 'Documents'} 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.length > 0 ? (
              documents.map(doc => (
                <Link 
                  key={doc.id} 
                  href={`/category/${categorySlug}/${doc.slug}`}
                >
                  <div className="border rounded-lg p-0 shadow">
                    {(doc as any).coverUrl && typeof (doc as any).coverUrl === 'string' && (
                      <Image
                        src={`/${(doc as any).coverUrl}`}
                        height={300}
                        width={300}
                        alt="cover"
                        className="w-full h-[45vh] object-fill"
                      />
                    )}
                    
                    <h2 className="text-md font-semibold p-4 text-center">
                      {(doc as any).title || `Document ${(doc as any).documentId}`}
                    </h2>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center p-8">
                No documents found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}