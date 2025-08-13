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
              Complete <span className="text-yellow-500">Battery & Charging System</span> Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert battery testing, charging system analysis, and maintenance services to ensure optimal electrical performance in Sandakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl('Hi, I need battery and charging system service. Can you help?')}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200"
              >
                WhatsApp for Quote
              </a>
              <a
                href={getPhoneUrl()}
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
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
                Our <span className="text-yellow-500">Services</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Battery Load Testing</h3>
                    <p className="text-gray-900">Comprehensive battery testing to determine capacity and performance under load conditions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Charging System Analysis</h3>
                    <p className="text-gray-900">Complete charging system evaluation including alternator output and voltage regulation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Voltage Regulator Service</h3>
                    <p className="text-gray-900">Professional testing and replacement of voltage regulators for proper charging control.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Terminal Service</h3>
                    <p className="text-gray-900">Battery terminal cleaning, protection, and replacement for optimal connections.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Signs You Need <span className="text-yellow-500">Charging System Service</span>
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Battery dies frequently
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Slow engine cranking
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Dim headlights at idle
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Charging warning light on dashboard
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Corrosion on battery terminals
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Battery older than 3-4 years
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Battery <span className="text-yellow-500">Solutions</span>
            </h2>
            <p className="text-lg text-gray-900">We service all types of automotive batteries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7c0-1.1.9-2 2-2h11l1 1v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7zm2 0v10h10V8H6V7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead-Acid Batteries</h3>
              <p className="text-gray-900">
                Traditional and reliable battery technology for most vehicles. Cost-effective solution with proven performance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AGM Batteries</h3>
              <p className="text-gray-900">
                Advanced glass mat technology for enhanced performance, longer life, and better vibration resistance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">EFB Batteries</h3>
              <p className="text-gray-900">
                Enhanced flooded batteries designed for start-stop vehicles and demanding electrical systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Battery or Charging Problems?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Don&apos;t wait for a complete failure. Get your battery and charging system checked today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl('Hi, I think my battery or charging system needs service. Can you help?')}
              className="bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Schedule Service
            </a>
            <a
              href={getPhoneUrl()}
              className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-yellow-500 transition-colors"
            >
              Call for Check
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}