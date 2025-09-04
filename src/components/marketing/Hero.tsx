import { getWhatsAppUrl, getPhoneUrl } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Expert <span className="text-yellow-500">Automotive Electrical</span> Solutions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Professional repair services and parts supply for alternators, starter motors, electrical diagnostics, and automotive accessories. 
              Trusted quality service in Sandakan since 2003.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl('Hi, I need automotive electrical service. Can you help?')}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200 text-center"
              >
                WhatsApp Now
              </a>
              <a
                href={getPhoneUrl()}
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-500 hover:text-black active:scale-95 hover:scale-105 transition-all duration-200 text-center"
              >
                Call Now
              </a>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-500">21+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-500">5000+</div>
                <div className="text-xs sm:text-sm text-gray-400">Cars Repaired</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-500">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Quality Work</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-yellow-500 rounded-2xl p-4 sm:p-6 lg:p-8 transform sm:rotate-1 lg:rotate-3 border-2 border-yellow-600 shadow-lg">
              <div className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 transform sm:-rotate-1 lg:-rotate-3 border border-gray-200 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose C&N Enterprise?</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 sm:mr-3 border border-yellow-600 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Expert repair & diagnostics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 sm:mr-3 border border-yellow-600 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Quality parts supply & warranty</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 sm:mr-3 border border-yellow-600 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Electrical accessories available</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 sm:mr-3 border border-yellow-600 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Honest pricing & reliable service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}