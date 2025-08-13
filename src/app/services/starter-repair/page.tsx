import { Metadata } from 'next';
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Starter Motor Repair - Professional Service in Sandakan | C&N Enterprise',
  description: 'Expert starter motor repair and replacement services in Sandakan. Fast diagnosis, quality parts, and professional installation with warranty. Call C&N Enterprise today!',
  keywords: 'starter motor repair Sandakan, starter replacement, car starting problems, automotive electrical repair',
};

export default function StarterRepairPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-yellow-500">Starter Motor Repair</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert diagnosis and repair of starter motor issues for reliable engine starting. Fast, professional service in Sandakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl('Hi, I need starter motor repair service. Can you help?')}
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
                What We <span className="text-yellow-500">Offer</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Comprehensive Testing</h3>
                    <p className="text-gray-900">Complete starter motor diagnosis using advanced testing equipment to identify the exact issue.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Solenoid Service</h3>
                    <p className="text-gray-900">Professional repair and replacement of starter solenoids for proper engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Brush Replacement</h3>
                    <p className="text-gray-900">Expert replacement of worn carbon brushes to restore proper motor function.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
                    <p className="text-gray-900">All repairs backed by comprehensive warranty on parts and labor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Signs You Need <span className="text-yellow-500">Starter Motor Repair</span>
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Engine won&apos;t start but lights work
                  </li>
                  <li className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Clicking sound when turning key
                  </li>
                  <li className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Grinding noise during startup
                  </li>
                  <li className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Starter engages but engine doesn&apos;t turn
                  </li>
                  <li className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Intermittent starting problems
                  </li>
                  <li className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Smoke from engine bay during start
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Car Won&apos;t Start?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Don&apos;t get stranded! Contact us now for fast starter motor diagnosis and repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl('Hi, my car won\'t start. I think I need starter motor repair.')}
              className="bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Get Immediate Help
            </a>
            <a
              href={getPhoneUrl()}
              className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-yellow-500 transition-colors"
            >
              Call for Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}