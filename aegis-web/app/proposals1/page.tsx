'use client';
import Image from "next/image";
export default function ThematicWorkingGroup() {
  return (
    <div className="min-h-screen bg-white relative z-40 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
      <header className="mb-8">
              
               
                 <div className="flex justify-between flex-col lg:flex-row">
               <div className='w-full lg:w-1/2 mb-8 space-y-4 mt-20'>
     
                 <h1 className='text-xl sm:text-3xl  mb-4 lg:mb-5 text-gray-900'>
                  Call For Proposals
                 </h1>
                 <p className='text-gray-700 '>The Research, Documentation, and Policy Engagement (RDPE) programme of Aegis Trust is pleased to launch this third Call for Proposals under the ASPIRE (Action for Sustainable Peace, Inclusion, Rights & Equality) Programme funded by the Swedish International Development Cooperation Agency (SIDA).</p>
     
       
     
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
        <section className="space-y-8">
          {/* Section 1: Call for Proposals */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">1. Call for Proposals</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The Aegis Trust is pleased to launch a second call for <strong>"Thematic Working Group"</strong> in two research proposals. The TWG scheme essentially consists of exploratory research on topical issues within a short period of time and longer than in a month. Research activity and the broader region are very dynamic, and research often struggles to catch up with fast-changing environments. The Thematic Working Group Scheme offers an opportunity for researchers to catch up with those changes. Applicants are invited to submit proposals on a specific theme they consider under-researched list of significant societal disrupting, including adding articles and case studies on topical socially.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The goal of the thematic working group scheme is to provide timely analytical contributions to emerging issues in society through exploratory thematic or case studies on topical socially Rwandan society and or the region.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Each thematic working group is comprised of two research experts with a proven track record of conducting research on their fields covered by the proposed topic. The two applying experts will identify policymakers working in their chosen topic areas to provide support with advocacy during the research process or provide a dissemination plan for the research output.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Proposed topics for inquiry should fit in at least one of Aegis Trust's broad thematic research areas, namely:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700 mb-4">
              <li>Genocide and genocide prevention</li>
              <li>Peace Education</li>
              <li>Peacebuilding</li>
              <li>Governance, Reconciliation and social cohesion</li>
              <li>Conflict resolution</li>
              <li>Mental health</li>
              <li>Gender</li>
              <li>Urbanisation and inclusive development</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              Applications for each thematic working group should include a Thematic Working Group proposal, detailed CVs of the research experts and/or biographical profiles of associated policymakers, including a rationale for their selection or a dissemination plan of the research. Proposals, not exceeding 1000 words, should cover the rationale for conducting research on the topic, the research question, a clear methodological approach, the expected contribution to existing research, and the contribution to research-informed policymaking in Rwanda.
            </p>
          </div>

          {/* Section 2: Expected Deliverables */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">2. Expected Deliverables</h3>
            <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
              <li>A Public Policy Blog</li>
              <li>A Thematic Working Group Report</li>
            </ul>
          </div>

          {/* Section 3: Timeline */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">3. Timeline:</h3>
            <p className="text-sm text-gray-700">6 months</p>
          </div>

          {/* Section 4: Available Budget */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">4. Available Budget:</h3>
            <p className="text-sm text-gray-700 mb-2">$3,000/pair tax inclusive*</p>
            <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
              <li>70% payment upon the signature of the contract</li>
              <li>30% final payment after the submission and validation of all deliverables</li>
            </ul>
          </div>

          {/* Section 5: Application Documents */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">5. Application Documents</h3>
            <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
              <li>A Thematic Working Group Research Proposal</li>
              <li>Detailed CVs of two experts</li>
              <li>Biographical profile of two chosen policymakers or Dissemination plan with policymakers</li>
            </ul>
            <p className="text-sm text-gray-700 mt-4">
              Applications should be submitted no later than Saturday, 15 June 2024.
            </p>
          </div>

          {/* Section 6: Background */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">6. Background</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Since 2014, the Aegis Trust has worked in Rwanda towards the prediction, prevention, and, ultimately, the elimination of genocide and other atrocity crimes for the benefit of humanity primarily through the preservation of memory, education (with a specific emphasis on peace education), and research. In 2014, the Aegis Trust started its Research programme which includes research on contemporary societal issues. In addition to policymaking, Aegis Trust seeks to influence peacebuilding policy and practice with scientific and ground-based evidence.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The research programme, through its policy-engaged and practice-oriented researchers, to research facilitation through advisory services tailored to individual research needs. Its capacity-strengthening activities for Rwandan Researchers, policymakers practitioners in the broad field of peacebuilding – w facilitation of knowledge exchange and dialogue between researchers, policymakers, and peacebuilding practitioners.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}