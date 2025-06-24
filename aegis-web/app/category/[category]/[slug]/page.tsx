'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Improved slug normalization utility - USE THIS EVERYWHERE
function normalizeSlug(input) {
  if (!input) return '';
  
  const normalized = input
    .toString()
    .toLowerCase()
    .replace(/[''"]/g, '')     // Remove all types of quotes
    .replace(/:/g, '-')        // Replace colons with dashes
    .replace(/\s+/g, '-')      // Replace spaces with dashes
    .replace(/[^\w\-]/g, '')   // Remove non-word chars except dashes
    .replace(/\-+/g, '-')      // Replace multiple dashes with single
    .replace(/^\-|\-$/g, '');  // Remove leading/trailing dashes
    
  console.log(`Slug normalization: "${input}" -> "${normalized}"`);
  return normalized;
}

export default function DocumentDetailPage() {
  const params = useParams();
  const { category, slug } = params;
  const categorySlug = Array.isArray(category) ? category[0] : category;
  const rawSlug = Array.isArray(slug) ? slug[0] : slug || '';
  
  // PROPERLY DECODE AND NORMALIZE THE INCOMING SLUG
  const docSlug = normalizeSlug(decodeURIComponent(rawSlug));
  
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryTitle = categorySlug === 'working-papers' ? 'Aegis Working Papers' : 
                       categorySlug === 'policy-briefs' ? 'Aegis Policy Briefs' :
                       categorySlug === 'journal-articles' ? 'RPHE Journal Articles' :
                       categorySlug === 'research-projects' ? 'Research Projects' :
                       categorySlug === 'research-events' ? 'Research Events' : 'Documents';

  useEffect(() => {
    const fetchDocument = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const url = `${strapiUrl}/api/media-assets?populate=*&pagination[pageSize]=1000`;
        console.log(`Fetching document with normalized slug: ${docSlug}`);
        
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        
        const data = await res.json();
        let allDocs = data.data || [];
        
        // Handle nested array structure - flatten if needed
        if (allDocs.length > 0 && Array.isArray(allDocs[0])) {
          allDocs = allDocs.flat();
        }
        
        // Handle case where data might be directly an object with numeric keys
        if (typeof allDocs === 'object' && !Array.isArray(allDocs)) {
          // Convert object with numeric keys to array
          allDocs = Object.values(allDocs);
        }
        
        console.log("Processed allDocs:", allDocs);
        console.log("First doc structure:", allDocs[0]);
        
        console.log("Raw API response structure:", data);
        console.log("All docs length:", allDocs.length);
        console.log("Target slug:", docSlug);
        
        // Test the exact slug from your data
        const testSlug = "from-child-to-genocide-perpetrator:-narrative-identity-analysis-among-genocide-prisoners-incarcerated-in-muhanga-prison-";
        console.log("Test normalization of stored slug:", normalizeSlug(testSlug));
        console.log("Target slug for comparison:", docSlug);
        console.log("Do they match?", normalizeSlug(testSlug) === docSlug);

        // IMPROVED DOCUMENT FINDING WITH BETTER NORMALIZATION
        console.log("Processing documents...");
        allDocs.forEach((doc, i) => {
          console.log(`Raw doc ${i}:`, doc);
          
          // Handle different possible data structures
          let docData = doc;
          if (doc.attributes) {
            docData = doc.attributes;
          } else if (typeof doc === 'object' && doc[0]) {
            docData = doc[0]; // Handle array wrapping
          } else if (typeof doc === 'object' && doc.slug) {
            docData = doc; // Direct object
          }
          
          const storedSlug = docData.slug || '';
          const titleSlug = normalizeSlug(docData.title || docData.Title || '');
          const normalizedStoredSlug = normalizeSlug(storedSlug);
          
          console.log(`Doc ${i + 1} processed:`, {
            rawDoc: doc,
            docData: docData,
            title: docData.title || docData.Title,
            storedSlug: storedSlug,
            normalizedStoredSlug: normalizedStoredSlug,
            titleSlug: titleSlug
          });
        });

        const foundDoc = allDocs.find(item => {
          console.log('Processing item in find:', item);
          
          // Handle different possible data structures
          let docData = item;
          let docId = item.id;
          
          if (item.attributes) {
            docData = item.attributes;
            docId = item.id;
          } else if (typeof item === 'object' && item[0]) {
            docData = item[0];
            docId = item[0].id || item.id;
          } else if (typeof item === 'object' && item.slug) {
            docData = item; // Direct object access
            docId = item.id;
          }
          
          console.log('Processed docData:', docData);
          
          // Get all possible slug variants
          const storedSlug = docData.slug || '';
          const normalizedStoredSlug = normalizeSlug(storedSlug);
          const titleSlug = normalizeSlug(docData.title || docData.Title || '');
          const fallbackSlug = `doc-${docId}`;
          
          // Additional matching attempts for edge cases
          const rawStoredSlug = storedSlug.toLowerCase().replace(/[^a-z0-9\-]/g, '').replace(/\-+/g, '-').replace(/^\-|\-$/g, '');
          
          // Check all possible matches
          const matches = [
            normalizedStoredSlug === docSlug,
            titleSlug === docSlug,
            fallbackSlug === docSlug,
            rawStoredSlug === docSlug,
            // Try exact match ignoring case
            storedSlug.toLowerCase() === docSlug.toLowerCase()
          ];
          
         const isMatch = matches.some(match => match);
          
          console.log('Matching attempt:', {
            docId: docId,
            title: docData.title || docData.Title,
            storedSlug: storedSlug,
            normalizedStoredSlug: normalizedStoredSlug,
            rawStoredSlug: rawStoredSlug,
            titleSlug: titleSlug,
            searchSlug: docSlug,
            matches: {
              normalized: normalizedStoredSlug === docSlug,
              title: titleSlug === docSlug,
              fallback: fallbackSlug === docSlug,
              raw: rawStoredSlug === docSlug,
              exact: storedSlug.toLowerCase() === docSlug.toLowerCase()
            },
            isMatch: isMatch
          });
          
         if (isMatch) {
  console.log('🎉 MATCH FOUND!', docData.title, docData.slug, docId);
  return true;
} else {
  console.warn('❌ No match for:', {
    docId,
    docSlug,
    titleSlug,
    normalizedStoredSlug,
    fallbackSlug,
    storedSlug,
  });
}
return false;
          
        
        });

        if (!foundDoc) {
          console.log('Available documents:', allDocs.map(d => {

            
            let dd = d;
            let dId = d.id;
            if (d.attributes) {
              dd = d.attributes;
              dId = d.id;
            } else if (typeof d === 'object' && d[0]) {
              dd = d[0];
              dId = d[0].id || dId;
            }
            return {
              id: dId,
              title: dd.title || dd.Title,
              storedSlug: dd.slug,
              normalizedStoredSlug: normalizeSlug(dd.slug || ''),
              titleSlug: normalizeSlug(dd.title || dd.Title || '')
            };
          }));
          throw new Error(`Document with slug "${docSlug}" not found. Available slugs logged to console.`);
        }

        // Handle different possible data structures for found document
        let docData = foundDoc;
        let docId = foundDoc.id;
        
        if (foundDoc.attributes) {
          docData = foundDoc.attributes;
          docId = foundDoc.id;
        } else if (typeof foundDoc === 'object' && foundDoc[0]) {
          docData = foundDoc[0];
          docId = foundDoc[0].id || docId;
        }
        
        // Process document data
        let documentFileUrl = null;
        let documentFileName = "Document";
        let coverUrl = null;

        if (docData.coverImg) {
          const cover = docData.coverImg;
          if (cover.data?.attributes?.url) {
            coverUrl = Array.isArray(cover.data) 
              ? cover.data[0]?.attributes?.url 
              : cover.data?.attributes?.url;
          } else if (cover.url) {
            coverUrl = cover.url;
          }
        }
        
        if (docData.DocumentFile) {
          const fileData = docData.DocumentFile;
          if (fileData.data?.attributes?.url) {
            documentFileUrl = Array.isArray(fileData.data) 
              ? fileData.data[0]?.attributes?.url 
              : fileData.data?.attributes?.url;
            documentFileName = fileData.data?.attributes?.name || "Document";
          } else if (fileData.url) {
            documentFileUrl = fileData.url;
            documentFileName = fileData.name || "Document";
          }
        }

        setDocument({
          id: docId,
          title: docData.title || docData.Title || 'Untitled Document',
          author: docData.author || docData.Author || '',
          coverUrl: coverUrl || '',
          publisher: docData.publisher || docData.Publisher || '',
          publicationDate: docData.publicationDate || '',
          documentType: docData.document_type?.data?.attributes?.name || 
                      docData.document_type?.name || 
                      docData.document_type?.DocumentType || 
                      docData.documentType || '',
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

    <div className="relative z-40 min-h-screen bg-white">
    <div className="container mx-auto p-12 mt-12 ">
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
    </div>
  );
}