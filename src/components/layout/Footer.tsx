import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';

export default async function Footer() {
  const siteConfig = await getSiteConfig();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-wider relative group">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl animate-pulse group-hover:animate-bounce">C&N</span>
              <span className="ml-1 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl relative animate-pulse hover:animate-bounce">
                ENTERPRISE
                <span className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75 border border-yellow-600"></span>
                <span className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-300 rounded-full animate-bounce delay-100 opacity-60 border border-yellow-500"></span>
                <span className="absolute top-1 right-8 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce delay-200 opacity-70 border border-yellow-700"></span>
                <span className="absolute -bottom-1 left-4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce delay-300 opacity-80 border border-yellow-600"></span>
                <span className="absolute top-0 left-0 w-1 h-1 bg-yellow-200 rounded-full animate-ping delay-400 opacity-90 border border-yellow-400"></span>
              </span>
              
              {/* Multiple Lightning bolt effects */}
              <svg className="absolute -top-3 -right-5 w-6 h-6 text-yellow-400 animate-pulse opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
              <svg className="absolute -top-1 -left-3 w-4 h-4 text-yellow-300 animate-bounce delay-200 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
              
              {/* Enhanced Spark particles */}
              <div className="absolute top-1 left-8 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping delay-75 opacity-75 border border-yellow-600"></div>
              <div className="absolute -top-1 right-10 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-150 opacity-80 border border-yellow-500"></div>
              <div className="absolute bottom-2 left-12 w-1 h-1 bg-yellow-500 rounded-full animate-ping delay-300 opacity-70 border border-yellow-700"></div>
              
            </h3>
            <p className="text-gray-400 mb-4">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/alternator-repair" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Alternator Repair
                </Link>
              </li>
              <li>
                <Link href="/services/starter-repair" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Starter Motor Repair
                </Link>
              </li>
              <li>
                <Link href="/services/wiring-diagnostics" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Wiring Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services/charging-system" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Charging System
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong className="text-white">Phone:</strong> {siteConfig.phone} (Main)<br />
                <span className="ml-16">{siteConfig.phoneSecondary}, {siteConfig.phoneThird}</span>
              </p>
              <p className="text-gray-400">
                <strong className="text-white">WhatsApp:</strong> {siteConfig.whatsapp}
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Email:</strong> 
                <a href={`mailto:${siteConfig.email}`} className="text-yellow-500 hover:text-yellow-400 ml-1">
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Address:</strong><br />
                {siteConfig.address.street}<br />
                {siteConfig.address.streetLine2}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 C&N Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}