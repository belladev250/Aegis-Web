import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

export default function ResearchEvents() {
    return (
        <div className="relative z-40 min-h-screen bg-[#F7F2F2]">
            <main className="relative">
                {/* Full-width background image */}
                <div className="h-[50vh] md:h-[70vh] lg:h-[95vh] mt-8">
                    <Image
                        src="/about.png"
                        alt="bg"
                        width={700}
                        height={700}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                {/* Centered content with transparent black background */}
                <div className="absolute top-24 md:top-32 lg:top-52 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
                    <div className="bg-black/70 p-6 md:p-8 lg:p-10 rounded-lg grid space-y-6 md:space-y-8 lg:space-y-10 mx-auto w-11/12 lg:w-10/12">
                        <div className="text-white text-sm md:text-base">
                            <p>The following presents events organized to support knowledge sharing among researchers, practitioners,
                                and policy makers through different programmes.</p>
                        </div>

                        <div className="text-sm md:text-base">
                            <button className="bg-maroon text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-maroon/90 transition-colors w-full sm:w-auto">
                                Submit Your Research
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <div className="p-4 md:p-6 bg-[#F7F2F2]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 text-gray-800 leading-relaxed space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                        <div className="space-y-4 border w-full md:w-1/3 border-borderColor p-4 md:p-6 rounded-lg">
                            <p className="text-lg md:text-xl font-semibold">Capacity Building</p>
                            <p className="text-sm md:text-base">The aim of our capacity building programme is to bolster the enviro…</p>
                            <Link href="/papers" className='inline-flex items-center text-maroon font-bold hover:text-maroon-dark transition-colors'>
                                <div className="flex space-x-2 cursor-pointer">
                                    <p className="text-maroon text-sm md:text-base">Learn more </p>
                                    <IoChevronForward className="text-maroon text-lg md:text-xl" />
                                </div>
                            </Link>
                        </div>

                        <div className="space-y-4 border w-full md:w-1/3 border-borderColor p-4 md:p-6 rounded-lg">
                            <p className="text-lg md:text-xl font-semibold">Policy Engagement</p>
                            <p className="text-sm md:text-base">For policy and practice to be effective in its goals, it is necessary to link…</p>
                            <Link href="/papers" className='inline-flex items-center text-maroon font-bold hover:text-maroon-dark transition-colors'>
                                <div className="flex space-x-2 cursor-pointer">
                                    <p className="text-maroon text-sm md:text-base">Learn more </p>
                                    <IoChevronForward className="text-maroon text-lg md:text-xl" />
                                </div>
                            </Link>
                        </div>

                        <div className="space-y-4 w-full md:w-1/3 border border-borderColor p-4 md:p-6 rounded-lg">
                            <p className="text-lg md:text-xl font-semibold">Research Grants</p>
                            <p className="text-sm md:text-base">The Research, Documentation, Policy and Engagement programme…</p>
                            <Link href="/papers" className='inline-flex items-center text-maroon font-bold hover:text-maroon-dark transition-colors'>
                                <div className="flex space-x-2 cursor-pointer">
                                    <p className="text-maroon text-sm md:text-base">Learn more </p>
                                    <IoChevronForward className="text-maroon text-lg md:text-xl" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}