import Link from "next/link";
import Image from "next/image";

export default function PolicyEngagement() {
    return (
        <div className="relative z-40 min-h-screen bg-white"> 
       
           <div className=" items-center justify-center p-24">
            <div className="flex justify-between flex-col lg:flex-row">
          <div className='w-full lg:w-1/2 mb-8 space-y-4'>
            <Link href="/" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
              ← AEGIS Research Event
            </Link>
            <h1 className='text-2xl sm:text-3xl  mb-4 lg:mb-5 text-gray-900'>
             Policy Engagement
            </h1>
            <p>For policy and practice to be effective in its goals, it is necessary to link political decisions to reliable and relevant research and evidence. We strive to have this achieved by organizing forums where practitioners, policy makers and other development actors meet with researchers and share knowledge, challenges experienced, and engage in pluralistic discussions to help define common grounds and formation of potential partnerships.

If you fall in any of the categories mentioned above and you would like to be part of these forums contact us  <Link href='/contact' className="text-maroon"> here </Link> and check the events section for more information on any upcoming event</p>

 <Link href="/submitresearch">
           <button className="mt-6 bg-maroon text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-maroon/90 transition-colors w-full sm:w-auto">
            Submit Your Research
          </button>
          </Link>
          
          </div>
          <div className='w-full lg:w-1/2 mt-6 lg:mt-12 flex justify-center'>
            <Image 
              src="/policy.jpg" 
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
                <p>Once the Aegis’ commissioned researchers come up with their final drafts,
                     we organise a conference bringing together all stakeholders somehow connected with the content of the relevant projects. The aim of this conference is to get constructive feedback from participants with the hope that such feedback would further enrich the paper. This engagement also strengthens commitment and capacity of research users to somewhat own, access, evaluate, 
                    synthesise and ultimately use research findings and recommendations in their work.</p>
            </div>

            
            <div className=" space-y-4">
                <h1 className="text-lg sm:text-3xl  mb-4 lg:mb-5 text-gray-900">Policy dialogue & Research seminars</h1>
                <p>Research seminars are mainly focused on exchanging on findings from research projects conducted by either Aegis Trust grant recipients or third parties as long as the topic is found to be 
                    interesting for Aegis Trust's main Peacebuilding mission and is topical within the Rwandan context. Policy dialogues mostly focus on publications by Rwandan official bodies. The aim of the dialogue is to deepen participants’
                     understanding on the findings in the publications or the methodological approaches used in data gathering.

               </p>
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