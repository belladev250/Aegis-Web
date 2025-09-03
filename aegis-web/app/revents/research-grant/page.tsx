import Link from "next/link";
import Image from "next/image";


export default function ResearchGrant() {
    return (
        <div className="relative z-40 min-h-screen bg-white"> 
       
           <div className=" items-center justify-center p-24">
            <div className="flex justify-between flex-col lg:flex-row">
          <div className='w-full lg:w-1/2 mb-8 space-y-4'>
            <Link href="/" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
              ← AEGIS Research Event
            </Link>
            <h1 className='text-2xl sm:text-3xl  mb-4 lg:mb-5 text-gray-900'>
             Research Grants
            </h1>
            <p>The Research, Documentation, Policy and Engagement programme intends to stimulate Rwandan research that is relevant to policy and practice. As a contribution to this,
                 the programme annually funds research projects by Rwandan researchers on themes relevant to genocide prevention and peace building. Non Rwandans collaborating with 
                 Rwandans can also apply for this grants.</p>
                
          <h1 className='text-2xl sm:text-3xl  mb-4 lg:mb-5 text-gray-900'> Applicfations are now closed</h1>

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

            <div className=" space-y-4">
                <h1 className="text-lg sm:text-3xl  mb-4 lg:mb-5 text-gray-900">Conferences</h1>
                <p>The programme publishes an annual Call for Research Proposals inviting mainly Rwandan nationals. The programme also established an new research scheme consisting of exploratory research. Rwandans main applicants may collaborate with non-Rwandan co-investigators to submit their applications. The proposals have to be in line with our themes. Projects to be funded are selected through a competitive process whereby quality, relevance and feasibility of the contemplated research are the key criteria used in their evaluation.
              The selection of the cohort of researchers to be funded, is made by a Research Advisor with the support of the Research, Documentation, Policy and Engagement team.</p>

                
            </div>

            
            <div className=" space-y-4">
                <h1 className="text-lg sm:text-3xl  mb-4 lg:mb-5 text-gray-900">Research Strategy</h1>

                <p>Recipients of Aegis Trust grants are expected to produce high-quality papers to be published in reputable international journals and on Aegis’ online working paper series.
                     In order to foster this, the organization offers a high-quality advisory service whereby grant recipients are assigned academics with vast experience in relevant fields
                      to work with for guidance throughout the life of the project.

               </p>

               <p> The length of the research duration is about 10-12 months. At the end of this period, 
                the researchers are expected to produce draft papers and policy briefs of the research projects.
                 These are then copy edited by a professional, 
                formatted to Aegis’ design and published on Aegis’ online working paper series.</p>
            </div>


          </div>

          <div className="text-center mt-20">
           <h1 className="text-md sm:text-2xl  mb-4 lg:mb-5 text-gray-900">Keep In Touch</h1>
           <p>If you would like to participate in our capacity-building programme contact us</p>
           <p>here and check the events section for more information on any upcoming event
           </p>
           <Link href='/contact'>
              <button className="mt-6 bg-maroon text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-maroon/90 transition-colors w-full sm:w-auto">
              Contact us
              </button>

            </Link>
          </div>
        </div>

        
        </div>  


        )}