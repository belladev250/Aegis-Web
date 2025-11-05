'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function CallForProposals() {
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
      formDataToSend.append('formType', 'Call for Proposals Submission');
      
      // Add form data as JSON string
      const formDataJson = {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        'Email Address': formData.email,
        'Phone Number': formData.phone,
        'Submission Date': formData.date,
        'Research Theme': formData.theme,
        'Proposal Abstract': formData.abstract,
        'Submitted On': new Date().toLocaleString('en-US', { 
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
          message: 'Thank you for your proposal submission! We will review your application and contact you soon .'
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
        message: 'Failed to submit proposal. Please try again or contact us at RDPE@aegistrust.org.rw'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative z-40">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Status Message */}
        {submitStatus.message && (
          <div className={`mb-6 p-4 rounded-lg mt-20 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            <p className="font-medium">{submitStatus.message}</p>
          </div>
        )}

        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
            Call For Proposals
          </h1>
          
          <div className="flex justify-between flex-col lg:flex-row">
            <div className='w-full lg:w-1/2 mb-8 space-y-4'>
              <h1 className='text-xl sm:text-3xl mb-4 lg:mb-5 text-gray-900'>
                Call For Proposals
              </h1>
              <p className='text-gray-700'>The Research, Documentation, and Policy Engagement (RDPE) programme of Aegis Trust is pleased to launch this third Call for Proposals under the ASPIRE (Action for Sustainable Peace, Inclusion, Rights & Equality) Programme funded by the Swedish International Development Cooperation Agency (SIDA).</p>

              <button 
                onClick={scrollToForm}
                className="mt-6 bg-maroon text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-maroon/90 transition-colors w-full sm:w-auto"
              >
                Apply Now
              </button>
            </div>
            <div className='w-full lg:w-1/2 mt-6 lg:mt-12 flex justify-center'>
              <Image 
                src="/pc.png" 
                alt="Capacity Building"
                height={600} 
                width={600} 
                className='h-64 w-full md:w-[70%] rounded-lg' 
                priority 
              />
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <section className="mb-12">
          <div className="max-w-none">
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              We welcome innovative submissions of proposals in English or French on topics connected to one of the following themes:
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">1. Governance and Social Cohesion:</h3>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                  <li>Inclusive governance and the margins;</li>
                  <li>Innovation and tradition in post-genocide governance in Rwanda: with a critical and excludible focus on home-grown initiatives (Ubudehe, Abunzi, Imihigo, Gacaca, Umuganda, Umwiherero, Itorero, Ubupfura, Umurimo, Umurongo, Agaciro, IMIHIGO);</li>
                  <li>New insights on unity, reconciliation, and reconstruction theory, practice, actors.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">2. Genocide, atrocity crimes, and Memorialization:</h3>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                  <li>Documentation and/or Memorialization of the genocide against the Tutsi in Rwanda and beyond;</li>
                  <li>Reintegration of genocide convicts in Rwandan society after release;</li>
                  <li>Genocide and atrocity crimes prevention: processes, institutions, and actors.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">3. Conflict, peacebuilding, and Peace Education:</h3>
                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
                  <li>Epistemological and/or pedagogical approaches to peace education in Rwanda and the Great Lakes region;</li>
                  <li>Conflict, peacebuilding, and justice in Rwanda and the Great Lakes Region;</li>
                  <li>Security, and safety in a globalised and digitalised world.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <p>
                Only Rwandan nationals may submit proposals as principal investigators. Rwandan main applicants may collaborate with non-Rwandan co-investigators. At least 3 proposals will receive funding. Each successful proposal will receive the Rwandan Francs equivalent of <strong>£850 British pounds</strong> (tax inclusive) to be used for researchers' remuneration and other costs associated with conducting the research (<strong>£1800</strong> will be paid upfront and <strong>£780</strong> upon the production of the outputs detailed below). The amount paid for each research proposal will be the same, regardless of the number of authors.
              </p>

              <p>Submitted proposals should be around <strong>500 words</strong> covering:</p>
              
              <ul className="list-disc ml-6 space-y-1">
                <li>a brief description of the topic,</li>
                <li>the specific research question to be answered,</li>
                <li>a clear methodological approach, and</li>
                <li>the paper's expected contribution to the existing knowledge.</li>
              </ul>

              <p>
                Applicants, including any co-authors, should also submit a <strong>copy of their CV</strong>. Proposals may relate to ongoing projects (which are not yet in the final stages) or new projects that require fresh research. Both categories will be paid at the same rate.
              </p>

              <p>
                Over the last decades, a large body of literature has been produced on Rwanda and the Great Lakes region. We therefore strongly encourage applicants to consult – and show their familiarity with – existing research to ensure that their proposals are truly innovative and likely to generate new insights and data. Applicants should, among others, be familiar with projects undertaken under previous Aegis Trust research grants available on the Genocide Research Hub.
              </p>

              <p>
                The <strong>deadline for submitting research proposals is 18 June 2024</strong>. Shortlisted applicants will be <strong>interviewed within two weeks</strong> after the submission deadline and a final selection will be made shortly after the interviews. Successful applicants will be expected to produce: (1) a <strong>final paper by 30 June 2025</strong> to be included in the Aegis online Working Paper series; (2) a <strong>Policy Brief highlighting the paper's key findings by 31 July 2025</strong>; and (3) <strong>evidence that the working paper has been submitted for publication in an academic journal</strong> or as a chapter in an edited volume. Selected researchers will contractually undertake to strictly comply with these deadlines. <strong>The project start date will be 21 July 2025</strong>.
              </p>

              <p>
                An initial meeting with the research advisory team will be organized at the beginning of the cohort and other meetings and events will be convened subsequently to discuss drafts produced by selected authors.
              </p>

              <p>
                Proposals should be submitted via the Genocide Research Hub, using the application form below. For any queries on this call or technical challenges in submitting the applications using the online platform, please contact us via{' '}
                <a href="mailto:RDPE@aegistrust.org.rw" className="text-red-900 hover:underline font-semibold">
                  RDPE@aegistrust.org.rw
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Research Grant Application Form Section */}
        <section ref={formRef} className="mt-20 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Research Proposal Submission Form
              </h2>
              <p className="text-gray-600 text-center">
                Submit your research proposal for funding through our Call for Proposals programme.
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
                  Submission Date *
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
                  <option value="Peace building">Peace building</option>
                  <option value="Genocide Studies">Genocide Studies</option>
                  <option value="Peace Education">Peace Education</option>
                </select>
              </div>

              {/* Abstract */}
              <div>
                <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 mb-2">
                  Proposal Abstract (approx. 500 words) *
                </label>
                <textarea
                  id="abstract"
                  name="abstract"
                  value={formData.abstract}
                  onChange={handleChange}
                  maxLength={500}
                  rows={4}
                  placeholder="Include: topic description, research question, methodological approach, and expected contribution"
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
                  Upload Proposal & CV *
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
                    accept=".pdf,.doc,.docx,.zip"
                  />
                  <div className="text-sm text-gray-500 mt-2">
                    Max. file size: 100 MB. Please include your proposal and CV (can be combined in one document or zipped together)
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
                  {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}