import { Metadata } from 'next';
import ServiceCard from '@/components/marketing/ServiceCard';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Services - C&N Enterprise Automotive Electrical',
  description: 'Professional automotive electrical repair services and parts supply including alternator repair, starter motor repair, wiring diagnostics, charging system service, and electrical accessories sales in Sandakan.',
  keywords: 'automotive electrical services, alternator repair, starter motor repair, wiring diagnostics, charging system service, electrical parts sales, automotive accessories, Sandakan',
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-yellow-500">Expert Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive automotive electrical solutions to diagnose, repair, and maintain your vehicle&apos;s electrical systems, plus quality parts and accessories supply.
            </p>
            <a
              href={getWhatsAppUrl('Hi, I would like to learn more about your automotive electrical services')}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200 inline-block"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Alternator Repair & Parts Sales"
              description="Complete alternator diagnostics, repair services, and genuine parts supply to restore your vehicle's charging system performance."
              features={[
                "Complete electrical diagnostics",
                "Alternator parts supply & sales",
                "Quality OEM and aftermarket parts",
                "Professional installation & repair",
                "Warranty on parts and labor"
              ]}
              href="/services/alternator-repair"
              icon={
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              }
            />
            
            <ServiceCard
              title="Starter Motor Repair & Sales"
              description="Expert starter motor diagnosis, repair, and parts supply to ensure reliable engine starting every time."
              features={[
                "Comprehensive starter testing",
                "Starter motor parts & sales",
                "Solenoid and brush replacement",
                "Armature and field coil repair",
                "Quality guarantee & warranty"
              ]}
              href="/services/starter-repair"
              icon={
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              }
            />
            
            <ServiceCard
              title="Wiring & Electrical Parts"
              description="Advanced diagnostic services and electrical components supply to identify, resolve, and upgrade automotive wiring systems."
              features={[
                "Advanced diagnostic equipment",
                "Electrical parts & accessories sales",
                "Circuit tracing and repair",
                "Wiring harness replacement",
                "Electrical system upgrades"
              ]}
              href="/services/wiring-diagnostics"
              icon={
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              }
            />
            
            <ServiceCard
              title="Battery & Charging System"
              description="Complete battery and charging system service plus battery and accessories supply for optimal electrical performance."
              features={[
                "Battery sales & replacement",
                "Battery load testing",
                "Charging system analysis",
                "Voltage regulator service",
                "Electrical accessories supply"
              ]}
              href="/services/charging-system"
              icon={
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7c0-1.1.9-2 2-2h11l1 1v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7zm2 0v10h10V8H6V7z"/>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose C&N <span className="text-yellow-500">Enterprise</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Technicians</h3>
              <p className="text-gray-900">Certified professionals with years of experience in automotive electrical systems.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Parts Supply & Sales</h3>
              <p className="text-gray-900">We supply and sell high-quality OEM and premium aftermarket electrical parts and accessories.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Service</h3>
              <p className="text-gray-900">Quick diagnosis and efficient repairs to get you back on the road as soon as possible.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}