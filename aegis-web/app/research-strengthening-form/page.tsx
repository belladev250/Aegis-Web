'use client';
import { useState } from 'react';

export default function CapacityStrengtheningWorkshop() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    educationBackground: '',
    levelCompleted: '',
    professionalAffiliation: '',
    participatedBefore: '',
    interestReason: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:1337/api/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Capacity Strengthening Workshop Registration',
          formData: {
            'First Name': formData.firstName,
            'Last Name': formData.lastName,
            'Email Address': formData.email,
            'Phone Number': formData.phone,
            'Education Background': formData.educationBackground,
            'Level Completed': formData.levelCompleted,
            'Professional Affiliation': formData.professionalAffiliation || 'Not provided',
            'Participated in Aegis Research Training Before': formData.participatedBefore,
            'Interest Reason': formData.interestReason,
            'Additional Information': formData.additionalInfo || 'None provided',
            'Submission Date': new Date().toLocaleString('en-US', { 
              timeZone: 'Africa/Kigali',
              dateStyle: 'full',
              timeStyle: 'short'
            })
          }
        })
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your registration! We will contact you soon.'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          educationBackground: '',
          levelCompleted: '',
          professionalAffiliation: '',
          participatedBefore: '',
          interestReason: '',
          additionalInfo: ''
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit registration. Please try again or contact us at rdpe@aegistrust.org.rw'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative z-40">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mb-12 mt-20">
          <h1 className="text-2xl md:text-2xl font-semibold text-maroon mb-4">
            Capacity Strengthening Workshop Registration Form
          </h1>
          <p className="text-xl text-gray-700 font-semibold">
            2nd - 3rd December 2024
          </p>
        </header>

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

        {/* Workshop Description Section */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The primary goal of the Workshop is to strengthen the research capacity of Rwandan researchers, 
            policymakers, and practitioners. The Workshop serves as a platform for researchers to learn or 
            refresh their knowledge, skills, and familiarity with different tools, techniques, and processes 
            underpinning the production of high-quality research.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The focus of the workshop</h2>
            <p className="text-gray-700 mb-4">
              The Capacity strengthening workshop will focus on the following key dimensions of the knowledge 
              production and dissemination process:
            </p>
            
            <div className="grid md:grid-cols-2 gap-2">
              {[
                "Understanding and contextualizing research in social sciences",
                "Qualitative and quantitative research methods",
                "Field research and data analysis",
                "The use of theory in social science research",
                "Research ethics and navigating sensitivities in social science research",
                "Publication and dissemination",
                "Research for Policy Dialogues in practice",
                "Academic writing (including research proposals)"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-4 h-4 border border-gray-400 rounded mt-1 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Capacity Strengthening Workshop aims to bring together Aegis Trust research grantees and other 
              Rwandan researchers in diverse fields of social sciences, arts and related fields, research 
              officers from public and private institutions, policymakers, practitioners, and postgraduate 
              students. Participants should at least hold a bachelor's degree in the referenced fields. 
              Highly motivated applicants from other academic fields may exceptionally be considered.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-gray-700">
                The registration period for the capacity strengthening workshop is open until{' '}
                <strong>22nd November 2024</strong>. Interested individuals are invited to fill out this{' '}
                <strong>form</strong>. Successful applicants will be notified and provided with details 
                about the workshop.
              </p>
              <p className="text-gray-700 mt-2">
                We appreciate your interest in our work and look forward to your continued engagement with 
                Aegis Trust research and other activities. For any questions or clarifications, you can 
                contact us via{' '}
                <a href="mailto:rdpe@aegistrust.org.rw" className="text-blue-600 hover:underline">
                  rdpe@aegistrust.org.rw
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Workshop Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="educationBackground" className="block text-sm font-medium text-gray-700 mb-2">
                Education Background *
              </label>
              <select
                id="educationBackground"
                name="educationBackground"
                value={formData.educationBackground}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={isSubmitting}
              >
                <option value="">Select your field of study</option>
                <option value="Arts and Social Studies">Arts and Social Studies</option>
                <option value="History">History</option>
                <option value="Education">Education</option>
                <option value="Community Development">Community Development</option>
                <option value="Environment">Environment</option>
                <option value="Psychology">Psychology</option>
                <option value="Conflict Resolution and Peace Building">Conflict Resolution and Peace Building</option>
                <option value="Peace and Conflict studies">Peace and Conflict studies</option>
                <option value="Public Health">Public Health</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="levelCompleted" className="block text-sm font-medium text-gray-700 mb-2">
                Level Completed *
              </label>
              <select
                id="levelCompleted"
                name="levelCompleted"
                value={formData.levelCompleted}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={isSubmitting}
              >
                <option value="">Select highest degree obtained</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <div>
              <label htmlFor="professionalAffiliation" className="block text-sm font-medium text-gray-700 mb-2">
                Professional Affiliation
              </label>
              <input
                type="text"
                id="professionalAffiliation"
                name="professionalAffiliation"
                value={formData.professionalAffiliation}
                onChange={handleChange}
                placeholder="Your current organization or institution"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Have you participated in any Aegis Research Training Scheme before? *
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="participatedBefore"
                    value="yes"
                    checked={formData.participatedBefore === 'yes'}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="participatedBefore"
                    value="no"
                    checked={formData.participatedBefore === 'no'}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="interestReason" className="block text-sm font-medium text-gray-700 mb-2">
                Please briefly explain why you are interested in this training, what you expect to achieve and how you will use the knowledge gained. *
              </label>
              <textarea
                id="interestReason"
                name="interestReason"
                value={formData.interestReason}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
                <span className="text-xs text-gray-500 block mt-1">(Optional - maximum 200 words)</span>
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isSubmitting}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-maroon text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}