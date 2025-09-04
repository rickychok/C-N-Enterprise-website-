import { Metadata } from 'next';
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Battery & Charging System Service - Expert Repair in Sandakan | C&N Enterprise',
  description: 'Professional battery and charging system service in Sandakan. Complete diagnosis, repair, and maintenance for optimal electrical performance.',
  keywords: 'battery service Sandakan, charging system repair, car battery replacement, automotive electrical service',
};

export default function ChargingSystemPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Battery & <span className="text-yellow-500">Charging System</span> Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert battery testing and charging system diagnostics to ensure your vehicle&apos;s electrical system performs optimally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl('Hi, I need battery and charging system service. Can you help?')}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200"
              >
                WhatsApp for Quote
              </a>
              <a
                href={getPhoneUrl()}
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-500 hover:text-black transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What We <span className="text-yellow-500">Offer</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Battery Testing & Diagnosis</h3>
                    <p className="text-black">Comprehensive battery testing to determine capacity and performance under load conditions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Charging System Analysis</h3>
                    <p className="text-black">Complete charging system evaluation including alternator output and voltage regulation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Voltage Regulator Service</h3>
                    <p className="text-black">Professional testing and replacement of voltage regulators for proper charging control.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Terminal Service</h3>
                    <p className="text-black">Battery terminal cleaning, protection, and replacement for optimal connections.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Signs You Need <span className="text-yellow-500">Battery Service</span>
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Slow engine cranking or starting issues
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Dashboard battery warning light
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Dim headlights or interior lights
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Electrical accessories not working properly
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Battery age over 3-4 years
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Swollen or corroded battery case
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service <span className="text-yellow-500">Process</span>
            </h2>
            <p className="text-lg text-black">Comprehensive battery and charging system service</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl border-2 border-yellow-700">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Testing</h3>
              <p className="text-black">Complete battery and charging system testing using professional equipment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl border-2 border-yellow-700">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Analysis</h3>
              <p className="text-black">Detailed analysis of system performance and identification of issues.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl border-2 border-yellow-700">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Service</h3>
              <p className="text-black">Professional service and repair using quality components and techniques.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl border-2 border-yellow-700">
                4
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Verification</h3>
              <p className="text-black">Final testing to ensure optimal performance and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Need Battery or Charging System Service?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Don&apos;t wait until you&apos;re stranded. Contact us for professional battery and charging system service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl('Hi, I need battery and charging system service today.')}
              className="bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Get Service Today
            </a>
            <a
              href={getPhoneUrl()}
              className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-black hover:text-yellow-500 transition-colors"
            >
              Call for Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}