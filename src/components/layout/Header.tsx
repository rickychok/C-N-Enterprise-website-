import Link from 'next/link';
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/whatsapp';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-black tracking-wider transform hover:scale-110 transition-all duration-300 relative group">
              <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent drop-shadow-2xl animate-pulse group-hover:animate-bounce">C&N</span>
              <span className="ml-1 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl relative animate-pulse hover:animate-bounce">
                ENTERPRISE
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75 border border-yellow-600"></span>
                <span className="absolute -top-3 -left-3 w-3 h-3 bg-yellow-300 rounded-full animate-bounce delay-100 opacity-60 border border-yellow-500"></span>
                <span className="absolute top-1 right-10 w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-200 opacity-70 border border-yellow-700"></span>
                <span className="absolute -bottom-2 left-6 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300 opacity-80 border border-yellow-600"></span>
                <span className="absolute top-2 left-2 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-ping delay-400 opacity-90 border border-yellow-400"></span>
              </span>
              
              {/* Multiple Lightning bolt effects */}
              <svg className="absolute -top-4 -right-8 w-8 h-8 text-yellow-400 animate-pulse opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
              <svg className="absolute -top-2 -left-4 w-5 h-5 text-yellow-300 animate-bounce delay-200 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
              
              {/* Enhanced Spark particles */}
              <div className="absolute top-2 left-12 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-75 opacity-75 border border-yellow-600"></div>
              <div className="absolute -top-2 right-16 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping delay-150 opacity-80 border border-yellow-500"></div>
              <div className="absolute bottom-3 left-20 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping delay-300 opacity-70 border border-yellow-700"></div>
              <div className="absolute top-0 left-0 w-1 h-1 bg-yellow-200 rounded-full animate-bounce delay-500 opacity-90 border border-yellow-400"></div>
              <div className="absolute -bottom-1 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-600 opacity-85 border border-yellow-600"></div>
              
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition-colors">
              About
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <a
              href={getPhoneUrl()}
              className="hidden sm:flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-yellow-600 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Call Now
            </a>
            <a
              href="mailto:cnnenterprise5757@gmail.com"
              className="hidden md:flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-yellow-600 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Email
            </a>
            <a
              href={getWhatsAppUrl('Hi, I need help with automotive electrical service')}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}