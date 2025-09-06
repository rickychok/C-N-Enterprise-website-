export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-yellow-500">C&N ENTERPRISE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Expert Automotive & Heavy Machinery Electrical Solutions
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Professional repair services & spare parts sales in Sandakan, Malaysia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+601118696757?text=Hi, I need automotive electrical service help"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200"
              >
                WhatsApp Now
              </a>
              <a
                href="tel:+601118696757"
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-500 hover:text-black active:scale-95 hover:scale-105 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-500">Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive electrical solutions for cars, trucks, and heavy machinery. Service & spare parts available.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200 hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                <span className="text-yellow-500">Alternator</span> Repair
              </h3>
              <p className="text-gray-700 mb-4">Complete alternator diagnosis, repair, and replacement services. We fix charging issues, worn brushes, faulty diodes, and electrical connections.</p>
              <ul className="text-sm text-gray-600">
                <li>• Charging system testing</li>
                <li>• Brush and slip ring repair</li>
                <li>• Diode replacement</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200 hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                <span className="text-yellow-500">Starter Motor</span> Repair
              </h3>
              <p className="text-gray-700 mb-4">Professional starter motor diagnosis and repair. We handle solenoid issues, worn gears, faulty windings, and complete rebuilds.</p>
              <ul className="text-sm text-gray-600">
                <li>• Solenoid replacement</li>
                <li>• Drive gear repair</li>
                <li>• Winding rewinding</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200 hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                <span className="text-yellow-500">Wiring & Electrical</span> Diagnostics
              </h3>
              <p className="text-gray-700 mb-4">Advanced electrical system diagnostics using modern equipment. We trace wiring issues, fix short circuits, and repair electrical components.</p>
              <ul className="text-sm text-gray-600">
                <li>• Circuit testing</li>
                <li>• Wire harness repair</li>
                <li>• Component diagnosis</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200 hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                <span className="text-yellow-500">Battery</span> Testing & Charging System
              </h3>
              <p className="text-gray-700 mb-4">Professional battery testing and charging system diagnostics. We test battery health, diagnose charging problems, and ensure optimal electrical performance.</p>
              <ul className="text-sm text-gray-600">
                <li>• Battery testing & diagnosis</li>
                <li>• Charging system repair</li>
                <li>• Power distribution fixes</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200 hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                <span className="text-yellow-500">Emergency</span> Roadside Service
              </h3>
              <p className="text-gray-700 mb-4">Emergency electrical services for stranded vehicles. Quick diagnosis and temporary fixes to get you back on the road safely during business hours.</p>
              <ul className="text-sm text-gray-600">
                <li>• On-site diagnosis</li>
                <li>• Emergency repairs</li>
                <li>• Jump start service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Heavy Machinery & Parts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Heavy <span className="text-yellow-500">Machinery</span> & Spare Parts
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We service and supply parts for excavators, tractors, lorries, and all heavy machinery with electrical systems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-yellow-500">Machinery</span> We Service
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                  <h4 className="font-bold text-yellow-600 mb-2">Construction Equipment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Excavators</li>
                    <li>• Bulldozers</li>
                    <li>• Loaders</li>
                    <li>• Cranes</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                  <h4 className="font-bold text-yellow-600 mb-2">Commercial Vehicles</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lorries & Trucks</li>
                    <li>• Buses</li>
                    <li>• Delivery Vans</li>
                    <li>• Trailers</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                  <h4 className="font-bold text-yellow-600 mb-2">Agricultural Equipment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tractors</li>
                    <li>• Harvesters</li>
                    <li>• Farm Equipment</li>
                    <li>• Irrigation Systems</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                  <h4 className="font-bold text-yellow-600 mb-2">Industrial Equipment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Generators</li>
                    <li>• Compressors</li>
                    <li>• Welding Equipment</li>
                    <li>• Factory Machinery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-yellow-500">Spare Parts</span> Available
              </h3>
              <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900 font-medium">Alternators & Replacement Parts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900 font-medium">Starter Motors & Solenoids</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900 font-medium">Carbon Brushes & Springs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900 font-medium">Electrical Components & Wiring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900 font-medium">Relays & Switches</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900 font-medium">Custom Parts Sourcing</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-yellow-600">Can&apos;t find the part you need?</strong> We can source specialized parts for your specific machinery. Contact us with your requirements!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}