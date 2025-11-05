"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ResearchGrant() {
  const formRef = useRef<HTMLElement | null>(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    abstract: '',
    theme: '',
    file: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.size > 100 * 1024 * 1024) { // 100 MB in bytes
      setSubmitStatus({
        type: 'error',
        message: 'File size exceeds 100 MB limit. Please upload a smaller file.'
      });
      e.target.value = ''; // Reset file input
      return;
    }
    setFormData(prev => ({
      ...prev,
      file: file
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const formDataToSend = new FormData();
      
      // Add form type
      formDataToSend.append('formType', 'Research Grant Application');
      
      // Add form data as JSON string
      const formDataJson = {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        'Email Address': formData.email,
        'Phone Number': formData.phone,
        'Application Date': formData.date,
        'Research Theme': formData.theme,
        'Abstract': formData.abstract,
        'Submission Date': new Date().toLocaleString('en-US', { 
          timeZone: 'Africa/Kigali',
          dateStyle: 'full',
          timeStyle: 'short'
        })
      };
      
      formDataToSend.append('formData', JSON.stringify(formDataJson));
      
      // Add file if present
      if (formData.file) {
        formDataToSend.append('file', formData.file);
      }

      const response = await fetch('http://localhost:1337/api/send-form', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your research grant application! We will review your submission and contact you soon.'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          date: '',
          abstract: '',
          theme: '',
          file: null
        });

        // Reset file input
        const fileInput = document.getElementById('file') as HTMLInputElement;
        if (fileInput) fileInput.value = '';

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit application. Please try again or contact us at rdpe@aegistrust.org.rw'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-40 min-h-screen bg-white"> 
      <div className="items-center justify-center p-24">
        {/* Status Message */}
        {submitStatus.message && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            <p className="font-medium">{submitStatus.message}</p>
          </div>
        )}

        <div className="flex justify-between flex-col lg:flex-row">
          <div className='w-full lg:w-1/2 mb-8 space-y-4'>
            <Link href="/" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
              ← AEGIS Research Event
            </Link>
            <h1 className='text-2xl sm:text-3xl mb-4 lg:mb-5 text-gray-900'>
              Research Grants
            </h1>
            <p>The Research, Documentation, Policy and Engagement programme intends to stimulate Rwandan research that is relevant to policy and practice. As a contribution to this,
              the programme annually funds research projects by Rwandan researchers on themes relevant to genocide prevention and peace building. Non Rwandans collaborating with 
              Rwandans can also apply for this grants.</p>
                
            <button 
              onClick={scrollToForm}
              className="mt-6 bg-maroon text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-maroon/90 transition-colors w-full sm:w-auto"
            >
              Apply Now
            </button>
          </div>
          <div className='w-full lg:w-1/2 mt-6 lg:mt-12 flex justify-center'>
            <Image 
              src="/grant.jpg" 
              alt="Capacity Building"
              height={600} 
              width={600} 
              className='h-64 w-full md:w-[70%] rounded-lg' 
              priority 
            />
          </div>
        </div>

        <div className="mt-20 space-y-12">
          <div className="space-y-4">
            <h1 className="text-lg sm:text-3xl mb-4 lg:mb-5 text-gray-900">Application Process</h1>
            <p>The programme publishes an annual Call for Research Proposals <Link href='/proposal' className="text-maroon"> (click here for the latest call) </Link>
              inviting mainly Rwandan nationals. The programme also established an new research scheme <Link href='/proposals1' className="text-maroon"> (click here for the Thematic Working group research Scheme) </Link>
              consisting of exploratory research. Rwandans main applicants may collaborate with non-Rwandan co-investigators to submit their applications. The proposals have to be in line with our themes. Projects to be funded are selected through a competitive process whereby quality, relevance and feasibility of the contemplated research are the key criteria used in their evaluation.
              The selection of the cohort of researchers to be funded, is made by a Research Advisor with the support of the Research, Documentation, Policy and Engagement team.</p>
          </div>

          <div className="space-y-4">
            <h1 className="text-lg sm:text-3xl mb-4 lg:mb-5 text-gray-900">Research Strategy</h1>
            <p>Recipients of Aegis Trust grants are expected to produce high-quality papers to be published in reputable international journals and on Aegis' online working paper series.
              In order to foster this, the organization offers a high-quality advisory service whereby grant recipients are assigned academics with vast experience in relevant fields
              to work with for guidance throughout the life of the project.</p>

            <p>The length of the research duration is about 10-12 months. At the end of this period, 
              the researchers are expected to produce draft papers and policy briefs of the research projects.
              These are then copy edited by a professional, 
              formatted to Aegis' design and published on Aegis' online working paper series.</p>
          </div>
        </div>

        {/* Research Grant Application Form Section */}
        <section ref={formRef} className="mt-20 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Research Grant Application
              </h2>
              <p className="text-gray-600 text-center">
                This form allows users to submit their research proposal for funding through our research grants programme.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-red-900"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-red-900"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-red-900"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-red-900"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Application Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-red-900"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Theme */}
              <div>
                <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
                  Research Theme *
                </label>
                <select
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-red-900"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a theme</option>
                  <option value="Peace Building">Peace Building</option>
                  <option value="Genocide Studies">Genocide Studies</option>
                  <option value="Peace Education">Peace Education</option>
                </select>
              </div>

              {/* Abstract */}
              <div>
                <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 mb-2">
                  Abstract *
                </label>
                <textarea
                  id="abstract"
                  name="abstract"
                  value={formData.abstract}
                  onChange={handleChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-red-900"
                  required
                  disabled={isSubmitting}
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.abstract.length} of 500 max characters
                </div>
              </div>

              {/* Upload files */}
              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Research Proposal *
                </label>
                <div className="border border-gray-300 rounded-md p-4">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    className="w-full"
                    required
                    disabled={isSubmitting}
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="text-sm text-gray-500 mt-2">
                    Max. file size: 100 MB. Accepted formats: PDF, DOC, DOCX
                  </div>
                  {formData.file && (
                    <div className="text-sm text-green-600 mt-2">
                      Selected: {formData.file.name} ({(formData.file.size / (1024 * 1024)).toFixed(2)} MB)
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-red-900 text-white px-8 py-3 rounded-md hover:bg-red-800 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>  
  );
}