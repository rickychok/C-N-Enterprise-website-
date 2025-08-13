import { getWhatsAppUrl, getPhoneUrl } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert <span className="text-yellow-500">Automotive Electrical</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional repair services and parts supply for alternators, starter motors, electrical diagnostics, and automotive accessories. 
              Trusted quality service in Sandakan since 2004.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl('Hi, I need automotive electrical service. Can you help?')}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200 text-center"
              >
                WhatsApp Now
              </a>
              <a
                href={getPhoneUrl()}
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-black active:scale-95 hover:scale-105 transition-all duration-200 text-center"
              >
                Call Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-500">20+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">5000+</div>
                <div className="text-sm text-gray-400">Cars Repaired</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">100%</div>
                <div className="text-sm text-gray-400">Quality Work</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-yellow-500 rounded-2xl p-8 transform rotate-3 border-2 border-yellow-600 shadow-lg">
              <div className="bg-white rounded-xl p-6 transform -rotate-3 border border-gray-200 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose C&N Enterprise?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></span>
                    Expert repair & diagnostics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></span>
                    Quality parts supply & warranty
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></span>
                    Electrical accessories available
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></span>
                    Honest pricing & reliable service
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