import Link from "next/link";
import Image from "next/image";


export default function CapacityBuilding() {
    return (
        
        <div className="relative z-40 min-h-screen bg-white"> 
       
           <div className=" items-center justify-center p-24">
            <div className="flex justify-between flex-col lg:flex-row">
          <div className='w-full lg:w-1/2 mb-8 space-y-4'>
            <Link href="/" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
              ← AEGIS Research Event
            </Link>
            <h1 className='text-2xl sm:text-3xl  mb-4 lg:mb-5 text-gray-900'>
             Capacity Building
            </h1>
            <p>The aim of our capacity building programme is to bolster the environment for Rwandan researchers and to stimulate research that is relevant to policy and practice, and one that meets the international standards of research integrity. If you would like to participate 
                in our capacity building programme contact us here and check the events section for more information on any upcoming event.</p>
          </div>
          <div className='w-full lg:w-1/2 mt-6 lg:mt-12 flex justify-center'>
            <Image 
              src="/about.png" 
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
                <h1 className="text-lg sm:text-3xl  mb-4 lg:mb-5 text-gray-900">Workshops</h1>
                <p>The Research, Policy and Higher Education Department supports knowledge sharing among researchers, 
                    practitioners and policy makers through organization of workshops and mentoring programmes. The workshops’ themes are customized to meet the needs of Rwandan researchers. Experts from different fields are invited and they engage the participants in intensive and pluralistic group discussions. Young researchers gain invaluable knowledge and skills
                     from our pool of experienced researchers that are part of our mentoring programme.</p>
            </div>

            
            <div className=" space-y-4">
                <h1 className="text-lg sm:text-3xl  mb-4 lg:mb-5 text-gray-900">Summer course</h1>
                <p>The RPHE department has developed partnerships with higher learning institutions
                     like the University of Rwanda among others to annually deliver a participative
                      short course for researchers from Rwanda, the Region and the World. The course, 
                      which is accredited, covers the causes of and responses to genocide and other mass atrocities,
                       in Rwanda and elsewhere in the world.

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