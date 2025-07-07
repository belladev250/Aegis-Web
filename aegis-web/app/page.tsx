import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

export default function Home() {
  return (
    <div className="relative z-20 min-h-screen bg-white scroll-smooth">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[80vh] lg:h-[95vh] w-full mt-8">
            <Image
              src="/bg.jpeg"
              alt="bg"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 lg:space-y-10 px-4">
            <div className="font-bold text-white text-3xl text-center">
              <p>Rwanda: Context and Comparison</p>
            </div>

            <div className="text-white w-full lg:w-10/12 text-center text-md lg:text-lg">
              <p>Since 2014, the Aegis Trust with the financial support from the UK Department for International Development (DfID) and Swedish International Development Cooperation Agency (Sida) has provided competitive research grants to Rwandan researchers working on various topics examining Rwanda's past, present and future from various disciplinary perspectives that concern peacebuilding.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 lg:gap-20 text-sm lg:text-lg">
              <Link href="/submitresearch" className='mt-4 inline-block text-maroon'>
                <button className="bg-maroon text-white p-3 rounded-md">Submit Your Research</button>
              </Link>
              <Link href="/joincommunity" className='mt-4 inline-block text-maroon'>
                <button className="bg-white text-maroon p-3 rounded-md">Join Our Community</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="py-16 px-4 md:px-8 lg:px-20" id="research">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="space-y-6 lg:w-1/2">
              <div className="space-y-4">
                <Image
                  src='/community.png'
                  alt="community"
                  height={500}
                  width={500}
                  className="w-full object-cover"
                />

                <div className="space-y-6">
                  <p className="font-bold text-3xl text-navy">Aegis Research</p>
                  <p>Since 2014, the Aegis Trust with the financial support from the UK Department for International Development (DfID) and Swedish International Development Cooperation Agency (Sida) has provided competitive research grants to Rwandan researchers working on various topics examining Rwanda's past, present and future from various disciplinary perspectives that concern peacebuilding.</p>

                  <Link href="/research" className='mt-4 inline-block text-maroon'>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <p className="text-maroon text-lg">Learn more</p>
                      <IoChevronForward className="text-maroon text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          {/* Research Section - Updated with simpler links */}
<div className="lg:w-1/2 space-y-4">
  <div className="flex gap-4 lg:gap-10 border-2 border-borderColor p-4 rounded-lg cursor-pointer">
    <Image src='/about.png' alt="default" width={80} height={80} className="self-center" />
    {/* <Link href="/category/working-papers" className='mt-4 inline-block text-maroon'> */}
    <Link href="/category/working-papers" className='mt-4 inline-block text-maroon'>

      <div className="flex items-center gap-2">
        <p className="text-maroon text-xl">Aegis Working Papers</p>
        <IoChevronForward className="text-maroon text-3xl" />
      </div>
    </Link>
  </div>

  <div className="flex gap-4 lg:gap-10 border-2 border-borderColor p-4 rounded-lg cursor-pointer">
    <Image src='/about.png' alt="default" width={80} height={80} className="self-center" />
    <Link href="/category/policy-briefs" className='mt-4 inline-block text-maroon'>
      <div className="flex items-center gap-2">
        <p className="text-maroon text-xl">Aegis Policy Briefs</p>
        <IoChevronForward className="text-maroon text-3xl" />
      </div>
    </Link>
  </div>

  <div className="flex gap-4 border-2 border-borderColor p-4 rounded-lg cursor-pointer">
    <Image src='/about.png' alt="default" width={80} height={80} className="self-center" />
    <Link href="/category/journal-articles" className='mt-4 inline-block text-maroon'>
      <div className="flex items-center gap-2">
        <p className="text-maroon text-xl">RPHE Journal articles and book chapters</p>
        <IoChevronForward className="text-maroon text-3xl" />
      </div>
    </Link>
  </div>

  <div className="flex gap-4 border-2 border-borderColor p-4 rounded-lg cursor-pointer">
    <Image src='/about.png' alt="default" width={80} height={80} className="self-center" />
    <Link href="/category/research-projects" className='mt-4 inline-block text-maroon'>
      <div className="flex items-center gap-2">
        <p className="text-maroon text-xl">Audiovisuals</p>
        <IoChevronForward className="text-maroon text-3xl" />
      </div>
    </Link>
  </div>

   <div className="flex gap-4 border-2 border-borderColor p-4 rounded-lg cursor-pointer">
    <Image src='/about.png' alt="default" width={80} height={80} className="self-center" />
    <Link href="/category/research-projects" className='mt-4 inline-block text-maroon'>
      <div className="flex items-center gap-2">
        <p className="text-maroon text-xl">Research Projects</p>
        <IoChevronForward className="text-maroon text-3xl" />
      </div>
    </Link>
  </div>
  
   <div className="flex gap-4 border-2 border-borderColor p-4 rounded-lg cursor-pointer">
    <Image src='/about.png' alt="default" width={80} height={80} className="self-center" />
    <Link href="/category/research-events" className='mt-4 inline-block text-maroon'>
      <div className="flex items-center gap-2">
        <p className="text-maroon text-xl">Aegis Research Events</p>
        <IoChevronForward className="text-maroon text-3xl"/>
      </div>
    </Link>
  </div>
  
</div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
            <div className="lg:w-3/5 space-y-6">
              <p className="font-bold text-3xl">News</p>
              <p className="text-lg">This section presents news of activities organized around the Research, Policy and Higher Education (RPHE) programme but also what happens around the world, related to genocide and peacebuilding. The section also presents opportunities including our research consultation campaigns, call for research proposals, conferences and research grants</p>
              <Link href="/news" className='mt-4 inline-block text-maroon'>
                <button className="p-4 border border-maroon text-maroon rounded-lg">See more articles</button>
              </Link>
            </div>

            <div className="lg:w-2/5">
              <Image
                src='/consultation.png'
                alt="consultation"
                width={400}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Policy Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-beige" id="policy">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/2">
              <Image
                src='/pen.png'
                alt="pen"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>

            <div className="lg:w-1/2 space-y-4">
              <p className="font-bold text-3xl">Our Policy & Practice</p>
              <p className="text-lg">This section presents to you research material that is relevant to policy. You will find policy briefs and documents, information on policy-relevant events organised by Aegis Trust or its partners as well as audiovisual research findings that is relevant for policymakers.</p>
              <Link href="/submitresearch" className='mt-4 inline-block text-maroon'>
                <button className="bg-maroon text-white rounded-lg p-4">Submit Research</button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4 border-2 border-borderColor p-6 rounded-lg">
              <p className="text-2xl">Policy Documents</p>
              <p className="text-md">The following presents documents related to policy</p>
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-maroon text-lg">Learn more</p>
                <IoChevronForward className="text-maroon text-xl" />
              </div>
            </div>

            <div className="space-y-4 border-2 border-borderColor p-6 rounded-lg">
              <p className="text-2xl">Audiovisual</p>
              <p className="text-md">The following presents audiovisuals related to policy</p>
              <Link href="/audiovisual" className='mt-4 inline-block text-maroon'>
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-maroon text-lg">Learn more</p>
                  <IoChevronForward className="text-maroon text-xl" />
                </div>
              </Link>
            </div>

            <div className="space-y-4 border-2 border-borderColor p-6 rounded-lg">
              <p className="text-2xl">Events</p>
              <p className="text-md">The following presents policy relevant events organized by Aegis Trust.</p>
              <Link href="/events" className='mt-4 inline-block text-maroon'>
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-maroon text-lg">Learn more</p>
                  <IoChevronForward className="text-maroon text-xl" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" id="involved">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-12">
            <div className="lg:w-1/2 space-y-4">
              <p className="font-bold text-3xl">Get Involved</p>
              <p className="text-lg">Join our network of researchers, policymakers, and practitioners dedicated to genocide prevention and peacebuilding. Learn how you can get involved in our events, contribute relevant materials to our library, and stay updated on research and policy opportunities.</p>
              <button className="bg-maroon text-white rounded-lg p-4">Join our community</button>
            </div>

            <div className="lg:w-1/2">
              <Image
                src='/pen.png'
                alt="pen"
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>

          <p className="text-3xl font-bold mb-8">Events</p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="space-y-4 border-2 border-borderColor p-4 rounded-lg lg:w-1/2">
              <p className="text-2xl font-bold">Upcoming events</p>
              <p className="text-md">Explore events around the research and policy community organized by Aegis Trust and other institutions focused on genocide prevention and peacebuilding.</p>
              <Link href="/events" className='mt-4 inline-block text-maroon'>
                <button className="p-4 border border-maroon text-maroon rounded-lg">Browse our events</button>
              </Link>
            </div>

            <div className="space-y-4 border-2 border-borderColor p-6 rounded-lg lg:w-1/2">
              <p className="text-2xl font-bold">Share your event with our network</p>
              <p className="text-md">Please let us know about an event you are hosting that is relevant to peacebuilding, research, policy, or practice. We will publish your event details on our events page and share it with our network.</p>
              <Link href="/submitevent" className='mt-4 inline-block text-maroon'>
                <button className="p-4 border border-maroon text-maroon rounded-lg">Share your event</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <Image
                src='/pen2.png'
                alt="pen"
                width={530}
                height={530}
                className="w-full object-cover"
              />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <p className="text-2xl font-bold">Propose a research project</p>
                <p className="text-md">Our research projects are aimed at answering diverse research questions giving the opportunity to study an area of interest in depth.</p>
                <Link href="/submitevent" className='mt-4 inline-block text-maroon'>
                <button className="p-4 border border-maroon text-maroon rounded-lg">Submit a proposal</button>
                </Link>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-bold">Submit research materials</p>
                <p className="text-md">We welcome any site visitor to submit research papers, policy briefs, policy documents, research-relevant audio visual materials and books to become publicly accessible on GRH.</p>
                <Link href="/submitevent" className='mt-4 inline-block text-maroon'>
                <button className="p-4 border border-maroon text-maroon rounded-lg">Submit Your Research</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}