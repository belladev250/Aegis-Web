'use client'
import { useState, useEffect } from 'react';

export default function MediaAssets() {
  const [mediaAssets, setMediaAssets] = useState([]);
  const [document_types, setdocument_types] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchMediaAssets = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        
        // We need to explicitly populate DocumentFile
        let url = `${strapiUrl}/api/media-assets?populate=DocumentFile`;
        if (selectedDocType) {
          url += `&filters[document_type][id][$eq]=${selectedDocType}`;
        }
        
        console.log("Requesting URL:", url);
        
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`API Error: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();
        console.log("Media assets response:", data);
        setMediaAssets(data.data || []);
      } catch (error) {
        console.error("Failed to fetch media assets:", error);
        setError(`Error loading media assets: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediaAssets();
  }, [selectedDocType]);

  useEffect(() => {
    const fetchdocument_types = async () => {
      try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const res = await fetch(`${strapiUrl}/api/document-types`);
        
        if (!res.ok) {
          console.error(`Document types API error: ${res.status} ${res.statusText}`);
          return;
        }
        
        const data = await res.json();
        setdocument_types(data.data || []);
      } catch (error) {
        console.error("Failed to fetch document types:", error);
      }
    };

    fetchdocument_types();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Media Assets</h1>
      
      {/* Document Type filter */}
      <div className="mb-6">
        <label htmlFor="docType" className="block mb-2">Filter by Document Type:</label>
        <select 
          id="docType"
          className="border rounded p-2 w-full md:w-1/3"
          value={selectedDocType} 
          onChange={(e) => setSelectedDocType(e.target.value)}
        >
          <option value="">All Document Types</option>
          {document_types.map(docType => (
            <option key={docType.id} value={docType.id}>
              {docType.DocumentType}
            </option>
          ))}
        </select>
      </div>
      
      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {/* Loading state */}
      {isLoading ? (
        <div>Loading media assets...</div>
      ) : (
        /* Media Assets grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaAssets.length > 0 ? (
            mediaAssets.map(asset => {
              // Log each asset to see its structure
              console.log("Asset:", asset);
              
              return (
                <div key={asset.id} className="border rounded-lg p-4 shadow">
                  <h3 className="text-xl font-semibold mb-2">
                    {asset.documentId || "Document ID"}
                  </h3>
                  
                  {asset.Publisher && (
                    <p className="mb-2"><strong>Publisher:</strong> {asset.Publisher}</p>
                  )}
                  
                  {asset.Author && (
                    <p className="mb-2"><strong>Author:</strong> {asset.Author}</p>
                  )}
                  
                  {asset.publicationDate && (
                    <p className="mb-2"><strong>Publication Date:</strong> {asset.publicationDate}</p>
                  )}
                  
                  {/* Try all possible file access patterns */}
                  {asset.DocumentFile && (
                    <a 
                      href={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${asset.DocumentFile.url}`}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-3"
                    >
                      Download {asset.DocumentFile.name || "File"}
                    </a>
                  )}
                  
               
                  
    
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center">No media assets found</div>
          )}
        </div>
      )}
    </div>
  );
}