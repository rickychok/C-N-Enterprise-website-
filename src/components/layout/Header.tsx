'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61579905982542';

  return (
    <>
      <header className="bg-white border-b border-gray-100 relative z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2">
            
            {/* Logo and Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Mobile/Tablet Hamburger Menu - Far left next to C */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <Link 
                href="/" 
                className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 hover:text-yellow-600 transition-colors tracking-tight flex items-center flex-shrink-0"
                style={{ fontFamily: '"Montserrat", "Poppins", "Inter", system-ui, -apple-system, sans-serif' }}
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-black">C&N</span>
                <span className="text-yellow-600 ml-1 font-black bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Enterprise</span>
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on tablet/mobile */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                About
              </Link>
              <Link 
                href="/reviews" 
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Reviews
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right side - Action buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppUrl('Hi, I need help with automotive electrical service')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center"
              >
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden text-xs">Chat</span>
              </a>
              
              {/* Facebook Button */}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-2.5 rounded-lg transition-colors inline-flex items-center justify-center flex-shrink-0"
                aria-label="Visit our Facebook page"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Sleek Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop with fade animation */}
          <div 
            className="lg:hidden fixed inset-0 z-40 bg-black/20 animate-in fade-in duration-300" 
            onClick={() => setIsMenuOpen(false)} 
          />
          
          {/* Dropdown Menu with enhanced animations */}
          <div className="lg:hidden absolute left-0 right-0 top-16 z-50 mx-4">
            <div 
              className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-500 ease-out animate-in slide-in-from-top-4 zoom-in-95"
              style={{
                animation: 'slideDownFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Navigation Links */}
              <nav className="py-2">
                <Link 
                  href="/" 
                  className="menu-item-1 group flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:via-yellow-25 hover:to-yellow-100 hover:text-yellow-800 transition-all duration-300 font-medium border-b border-gray-50 last:border-0 relative overflow-hidden hover:shadow-sm hover:border-yellow-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Left sliding indicator */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out shadow-lg"></div>
                  
                  {/* Background pulse effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/30 to-yellow-200/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 mr-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400 ease-out relative z-10 group-hover:drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="transform group-hover:translate-x-2 group-hover:font-semibold transition-all duration-400 ease-out relative z-10 group-hover:text-yellow-900">Home</span>
                  
                  {/* Right chevron with bounce */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                    <svg className="w-4 h-4 text-yellow-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link 
                  href="/services" 
                  className="menu-item-2 group flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:via-yellow-25 hover:to-yellow-100 hover:text-yellow-800 transition-all duration-300 font-medium border-b border-gray-50 last:border-0 relative overflow-hidden hover:shadow-sm hover:border-yellow-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Left sliding indicator */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out shadow-lg"></div>
                  
                  {/* Background pulse effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/30 to-yellow-200/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 mr-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400 ease-out relative z-10 group-hover:drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <span className="transform group-hover:translate-x-2 group-hover:font-semibold transition-all duration-400 ease-out relative z-10 group-hover:text-yellow-900">Services</span>
                  
                  {/* Right chevron with bounce */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                    <svg className="w-4 h-4 text-yellow-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link 
                  href="/about" 
                  className="menu-item-3 group flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:via-yellow-25 hover:to-yellow-100 hover:text-yellow-800 transition-all duration-300 font-medium border-b border-gray-50 last:border-0 relative overflow-hidden hover:shadow-sm hover:border-yellow-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Left sliding indicator */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out shadow-lg"></div>
                  
                  {/* Background pulse effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/30 to-yellow-200/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 mr-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400 ease-out relative z-10 group-hover:drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="transform group-hover:translate-x-2 group-hover:font-semibold transition-all duration-400 ease-out relative z-10 group-hover:text-yellow-900">About</span>
                  
                  {/* Right chevron with bounce */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                    <svg className="w-4 h-4 text-yellow-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link 
                  href="/reviews" 
                  className="menu-item-4 group flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:via-yellow-25 hover:to-yellow-100 hover:text-yellow-800 transition-all duration-300 font-medium border-b border-gray-50 last:border-0 relative overflow-hidden hover:shadow-sm hover:border-yellow-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Left sliding indicator */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out shadow-lg"></div>
                  
                  {/* Background pulse effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/30 to-yellow-200/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 mr-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400 ease-out relative z-10 group-hover:drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="transform group-hover:translate-x-2 group-hover:font-semibold transition-all duration-400 ease-out relative z-10 group-hover:text-yellow-900">Reviews</span>
                  
                  {/* Right chevron with bounce */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                    <svg className="w-4 h-4 text-yellow-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link 
                  href="/contact" 
                  className="menu-item-5 group flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:via-yellow-25 hover:to-yellow-100 hover:text-yellow-800 transition-all duration-300 font-medium border-b border-gray-50 last:border-0 relative overflow-hidden hover:shadow-sm hover:border-yellow-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Left sliding indicator */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out shadow-lg"></div>
                  
                  {/* Background pulse effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/30 to-yellow-200/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                  
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 mr-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400 ease-out relative z-10 group-hover:drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="transform group-hover:translate-x-2 group-hover:font-semibold transition-all duration-400 ease-out relative z-10 group-hover:text-yellow-900">Contact</span>
                  
                  {/* Right chevron with bounce */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-x-4 group-hover:translate-x-0 relative z-10">
                    <svg className="w-4 h-4 text-yellow-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                
                {/* Action Buttons */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={getWhatsAppUrl('Hi, I need automotive electrical service help')}
                      className="group bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg text-center font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-sm transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <svg className="w-4 h-4 relative z-10 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                      </svg>
                      <span className="relative z-10 group-hover:font-bold transition-all duration-300">WhatsApp</span>
                      <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="tel:+601118696757"
                      className="group bg-yellow-500 hover:bg-yellow-600 text-black py-2.5 px-4 rounded-lg text-center font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-sm transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <svg className="w-4 h-4 relative z-10 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="relative z-10 group-hover:font-bold transition-all duration-300">Call Now</span>
                      <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}