import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';

export default async function Footer() {
  const siteConfig = await getSiteConfig();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-black mb-4 tracking-wider relative overflow-hidden">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg">C&N</span>
              <span className="ml-1 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg relative">
                ENTERPRISE
                {/* Simplified mobile-friendly animation */}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75 hidden sm:block"></span>
              </span>
              
              {/* Simplified lightning bolt - hidden on mobile */}
              <svg className="absolute -top-2 -right-3 w-4 h-4 text-yellow-400 animate-pulse opacity-80 hidden sm:block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
              
            </h3>
            <p className="text-gray-400 mb-4">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors transform hover:scale-110"
                  aria-label="Visit our Facebook page"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
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
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="text-gray-400">
                <strong className="text-white block mb-1">Phone:</strong>
                <div className="pl-2 space-y-1">
                  <div>{siteConfig.phone} <span className="text-yellow-500">(Main)</span></div>
                  <div>{siteConfig.phoneSecondary}</div>
                  <div>{siteConfig.phoneThird}</div>
                </div>
              </div>

              {/* WhatsApp & Social */}
              <div className="text-gray-400">
                <strong className="text-white block mb-1">WhatsApp & Social:</strong>
                <div className="pl-2 space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.736"/>
                    </svg>
                    <span className="text-sm sm:text-base break-all">{siteConfig.whatsapp}</span>
                  </div>
                  {siteConfig.socialLinks.facebook && (
                    <a
                      href={siteConfig.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-1"
                      aria-label="Visit our Facebook page"
                    >
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-xs sm:text-sm">Facebook</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="text-gray-400">
                <strong className="text-white block mb-1">Email:</strong>
                <div className="pl-2">
                  <a href={`mailto:${siteConfig.email}`} className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm sm:text-base break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="text-gray-400">
                <strong className="text-white block mb-1">Address:</strong>
                <div className="pl-2 leading-relaxed">
                  <div>{siteConfig.address.street}</div>
                  <div>{siteConfig.address.streetLine2}</div>
                  <div>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</div>
                </div>
              </div>
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