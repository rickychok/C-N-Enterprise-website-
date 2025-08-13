import { Metadata } from 'next';
import { getWhatsAppUrl, getPhoneUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Electrical Wiring Diagnostics - Expert Service in Sandakan | C&N Enterprise',
  description: 'Professional automotive electrical diagnostics and wiring repair services in Sandakan. Advanced equipment, expert technicians, and quality repairs with warranty.',
  keywords: 'electrical diagnostics Sandakan, automotive wiring repair, car electrical problems, electrical troubleshooting',
};

export default function WiringDiagnosticsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-yellow-500">Electrical Diagnostics</span> & Wiring Repair
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional electrical system diagnostics to identify and resolve complex automotive wiring issues. Expert service in Sandakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl('Hi, I need electrical diagnostics for my car. Can you help?')}
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
                Our <span className="text-yellow-500">Diagnostic Services</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Advanced Equipment</h3>
                    <p className="text-gray-900">State-of-the-art diagnostic tools and oscilloscopes to identify complex electrical issues.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Circuit Analysis</h3>
                    <p className="text-gray-900">Complete electrical circuit tracing and analysis to locate faults and shorts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Wiring Harness Repair</h3>
                    <p className="text-gray-900">Professional repair and replacement of damaged wiring harnesses and connectors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 border border-yellow-700"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">System Optimization</h3>
                    <p className="text-gray-900">Electrical system optimization for improved performance and reliability.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common <span className="text-yellow-500">Electrical Problems</span>
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Intermittent electrical failures
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Blown fuses or circuit breakers
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Malfunctioning sensors or modules
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Electrical shorts or ground faults
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Corroded or damaged connectors
                  </li>
                  <li className="flex items-center text-gray-900">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 border border-red-700"></span>
                    Communication bus errors
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
              Our Diagnostic <span className="text-yellow-500">Process</span>
            </h2>
            <p className="text-lg text-gray-900">Systematic approach to electrical problem solving</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Initial Assessment</h3>
              <p className="text-gray-900">Comprehensive evaluation of symptoms and electrical system overview.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Advanced Testing</h3>
              <p className="text-gray-900">Using diagnostic equipment to pinpoint electrical faults and issues.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Repair & Replace</h3>
              <p className="text-gray-900">Professional repair of identified issues using quality components.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">System Verification</h3>
              <p className="text-gray-900">Complete system testing to ensure all functions work properly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Experiencing Electrical Problems?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let our experts diagnose and fix your automotive electrical issues quickly and accurately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl('Hi, my car has electrical problems. I need professional diagnostics.')}
              className="bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Get Expert Help
            </a>
            <a
              href={getPhoneUrl()}
              className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-yellow-500 transition-colors"
            >
              Call for Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}