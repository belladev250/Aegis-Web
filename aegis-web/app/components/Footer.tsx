import React from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" z-0 bottom-0 sticky w-full bg-maroon text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2">About Us</h3>
            <p className="text-md">
              The Genocide Research Hub aims to contribute to building a
              knowledge society around genocide prevention and peacebuilding
              policy and practice in Rwanda.
            </p>
            <Link href="/about" className='mt-4 inline-block text-white'>
              <div className="flex items-center space-x-2 cursor-pointer group">
                <p className="text-lg font-bold group-hover:underline">Read more</p>
                <IoChevronForward className="text-2xl group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Latest News Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2">Latest News</h3>
            <ul className="space-y-3">
              <li className="hover:text-gray-200 cursor-pointer">How Memory of Genocide Builds Peace</li>
              <li className="hover:text-gray-200 cursor-pointer">Navigating Intergenerational Legacies: Insights from Aegis Trust's Research for Policy Conference</li>
              <li className="hover:text-gray-200 cursor-pointer">Aegis strengthens Rwandan research capacity</li>
            </ul>
            <Link href="/news" className='mt-4 inline-block text-white'>
              <div className="flex items-center space-x-2 cursor-pointer group">
                <p className="text-lg font-bold group-hover:underline">Read more</p>
                <IoChevronForward className="text-2xl group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Latest Tweets Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2">Latest Tweets</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <p className="text-md">
                  13 DAYS REMAINING to send in your application for a Research Grant.
                  If you are a Rwandan Researcher interested in writing about Peace-building,
                  Genocide studies or Peace Education, Do not miss this opportunity!
                </p>
              </div>
            </div>
            <Link href="https://x.com/Aegis_Trust" className='mt-4 inline-block text-white' target='_blank'>
              <div className="flex items-center space-x-2 cursor-pointer group">
                <p className="text-lg font-bold group-hover:underline">View all posts</p>
                <IoChevronForward className="text-2xl group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-white/20 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-lg" />
                <p>+250 788 123 456</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lg" />
                <p>info@genocideresearchhub.org</p>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-lg mt-1" />
                <p>Kigali Genocide Memorial, Gisozi, Kigali, Rwanda</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <Link href="https://x.com/Aegis_Trust" className='mt-4 inline-block text-white' target='_blank'>
                <FaTwitter className="text-2xl" />
              </Link>
              <Link href="https://web.facebook.com/AegisTrust" className='mt-4 inline-block text-white' target='_blank'>
                <FaFacebook className="text-2xl" />
              </Link>
              {/* <a href="#" className="hover:text-gray-300 transition-colors">
                <FaInstagram className="text-2xl" />
              </a> */}
              <Link href="https://www.linkedin.com/company/aegistrust/" className='mt-4 inline-block text-white' target='_blank'>
                <FaLinkedin className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-maroon border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/80">
          Copyright © {new Date().getFullYear()} Aegis Trust. All Rights Reserved. Registered Charity: UK - Aegis Trust, charity no. 1082856, US - Aegis America Inc, EIN 31-1769192, Rwanda - Aegis Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;