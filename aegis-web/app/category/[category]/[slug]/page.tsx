'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DocumentDetailPage() {
  const params = useParams();
  const { category, slug } = params;
  const categorySlug = Array.isArray(category) ? category[0] : category;
  const docSlug = Array.isArray(slug) ? slug[0] : slug;
  
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const url = `${strapiUrl}/api/media-assets?populate=*`;
        console.log(`Fetching document with slug: ${docSlug}`);
        
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        
        const data = await res.json();
        const allDocs = data.data || [];
        
        // Find document by matching slug
        const foundDoc = allDocs.find(item => {
          const docData = item.attributes || item;
          const itemSlug = docData.slug || 
                         (docData.Title || docData.title || '')
                           .toLowerCase()
                           .replace(/\s+/g, '-') || 
                         `doc-${item.id}`;
          return itemSlug === docSlug;
        });

        if (!foundDoc) {
          throw new Error(`Document with slug "${docSlug}" not found`);
        }

        const docData = foundDoc.attributes || foundDoc;
        
        // Process document data (same as in category page)
        let documentFileUrl = null;
        let documentFileName = "Document";
        let coverUrl = null;

        if (docData.coverImg) {
          const cover = docData.coverImg;
          if (cover.data && Array.isArray(cover.data) && cover.data[0]?.attributes?.url) {
            coverUrl = cover.data[0].attributes.url;
          } else if (cover.data && cover.data?.attributes?.url) {
            coverUrl = cover.data.attributes.url;
          } else if (cover.url) {
            coverUrl = cover.url;
          }
        }
        
        if (docData.DocumentFile) {
          const fileData = docData.DocumentFile;
          if (fileData.data && Array.isArray(fileData.data) && fileData.data[0]?.attributes?.url) {
            documentFileUrl = fileData.data[0].attributes.url;
            documentFileName = fileData.data[0].attributes.name || "Document";
          } else if (fileData.data && fileData.data?.attributes?.url) {
            documentFileUrl = fileData.data.attributes.url;
            documentFileName = fileData.data.attributes.name || "Document";
          } else if (fileData.url) {
            documentFileUrl = fileData.url;
            documentFileName = fileData.name || "Document";
          }
        }

        setDocument({
          id: foundDoc.id,
          title: docData.Title || 'Untitled Document',
          author: docData.Author || '',
          coverUrl: coverUrl || '',
          publisher: docData.Publisher || '',
          publicationDate: docData.publicationDate || '',
          documentType: docData.document_type?.data?.attributes?.name || 
                       docData.document_type?.name || 
                       docData.document_type?.DocumentType || '',
          documentFileUrl,
          documentFileName
        });

      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (docSlug) {
      fetchDocument();
    }
  }, [docSlug]);

  if (isLoading) return <div className="p-8 text-center">Loading document...</div>;
  
  if (error) return (
    <div className="p-8 text-center text-red-500">
      <h2>Error Loading Document</h2>
      <p>{error}</p>
      <Link href={`/category/${categorySlug}`} className="text-maroon hover:underline">
        ← Back to {categoryTitle}
      </Link>
    </div>
  );

  if (!document) return (
    <div className="p-8 text-center">
      <h2>Document not found</h2>
      <Link href={`/category/${categorySlug}`} className="text-maroon hover:underline">
        ← Back to {categoryTitle}
      </Link>
    </div>
  );

  return (
    <div className="container mx-auto p-12 mt-12">
      <div className="mb-6">
        <Link href="/" className="text-maroon hover:underline">Home</Link> / 
        <Link href={`/category/${categorySlug}`} className="text-maroon hover:underline"> {categorySlug}</Link> / 
        <span> {document.title}</span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mt-20">
        {/* Left Column - Cover Image */}
        
        {(document as any).coverUrl && typeof (document as any).coverUrl === 'string' && (

          <div className="w-full md:w-1/3">
     <Image
      src={
        (document as any).coverUrl.startsWith('http') 
          ? (document as any).coverUrl
          : (document as any).coverUrl.startsWith('/') 
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${(document as any).coverUrl}`
            : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}/uploads/${(document as any).coverUrl}`
      }
      height={300}
      width={300}
      alt="cover"
      className="w-full h-auto mb-4"
      unoptimized={true} // Add this if you're having optimization issues
    />
        
            
            
            {document.documentFileUrl && (
              <div className="mt-4">
                <a
                  href={document.documentFileUrl.startsWith('http') ? 
                        document.documentFileUrl : 
                        `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${document.documentFileUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-maroon text-white py-3 px-4 rounded hover:bg-maroon-dark transition-colors"
                  download
                >
                  Download PDF
                </a>
              </div>
            )}
          </div>
        )}
        
        {/* Right Column - Details */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{document.title}</h1>
          
          <div className="space-y-4 mb-6">
            {document.author && <p><strong>Author(s):</strong> {document.author}</p>}
            {document.publisher && <p><strong>Publisher:</strong> {document.publisher}</p>}
            {document.publicationDate && <p><strong>Publication Date:</strong> {document.publicationDate}</p>}
            {document.documentType && <p><strong>Document Type:</strong> {document.documentType}</p>}
          </div>
          
          {/* PDF Preview */}
          {document.documentFileUrl && (
            <div className="mt-20">
              <h2 className="text-xl font-semibold mb-4">Document Preview</h2>
              <iframe
                src={document.documentFileUrl.startsWith('http') ? 
                     document.documentFileUrl : 
                     `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${document.documentFileUrl}`}
                className="w-full min-h-[500px] border rounded-lg"
                title="PDF Preview"
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 border-t pt-4">
        <Link 
          href={`/category/${categorySlug}`} 
          className="inline-flex items-center text-maroon font-bold hover:underline"
        >
          ← Back to {categorySlug.replace(/-/g, ' ')}
        </Link>
      </div>
    </div>
  );
}