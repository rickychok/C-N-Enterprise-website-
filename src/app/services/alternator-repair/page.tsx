import { Metadata } from 'next';
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Alternator Repair - Professional Service in Sandakan | C&N Enterprise',
  description: 'Expert alternator repair and replacement services in Sandakan. Fast diagnosis, quality parts, and professional installation with warranty. Call C&N Enterprise today!',
  keywords: 'alternator repair Sandakan, alternator replacement, car charging system repair, automotive electrical repair',
};

export default function AlternatorRepairPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-yellow-500">Alternator Repair</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert diagnosis and repair of alternator issues to restore your vehicle&apos;s charging system performance. Fast, reliable service in Sandakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl('Hi, I need alternator repair service. Can you help?')}
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
                    <h3 className="font-bold text-lg mb-2 text-black">Complete Diagnosis</h3>
                    <p className="text-black">Comprehensive testing of your alternator using advanced diagnostic equipment to identify the exact issue.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Professional Repair</h3>
                    <p className="text-black">Expert repair of alternator components including brushes, slip rings, diodes, and voltage regulators.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Quality Parts</h3>
                    <p className="text-black">We use only premium OEM and high-quality aftermarket parts for lasting performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Warranty Coverage</h3>
                    <p className="text-black">All repairs come with comprehensive warranty on both parts and labor for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Signs You Need <span className="text-yellow-500">Alternator Repair</span>
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Dashboard warning light is on
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Car battery keeps dying
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Dim or flickering headlights
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Unusual noises from engine bay
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Electrical accessories not working properly
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Engine stalling or hard to start
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
              Our Repair <span className="text-yellow-500">Process</span>
            </h2>
            <p className="text-lg text-black">Simple steps to get your alternator working perfectly</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl border-2 border-yellow-700">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Diagnosis</h3>
              <p className="text-black">Comprehensive testing to identify the exact problem with your alternator.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl border-2 border-yellow-700">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Quote</h3>
              <p className="text-black">Transparent pricing with detailed explanation of required repairs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl border-2 border-yellow-700">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Repair</h3>
              <p className="text-black">Professional repair using quality parts and expert techniques.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl border-2 border-yellow-700">
                4
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Testing</h3>
              <p className="text-black">Thorough testing to ensure optimal performance before delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Need Alternator Repair Today?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Don&apos;t wait until your battery dies completely. Contact us now for fast, professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl('Hi, I need urgent alternator repair. My car has charging system issues.')}
              className="bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Get Immediate Help
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