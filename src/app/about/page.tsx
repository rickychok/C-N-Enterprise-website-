import { Metadata } from 'next';
import { getSiteConfig } from '@/lib/content';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About Us - C&N Enterprise Automotive Electrical Experts',
  description: 'Learn about C&N Enterprise, your trusted automotive electrical repair specialists in Sandakan. Over 20 years of experience in alternator, starter motor, and electrical diagnostics.',
  keywords: 'about C&N Enterprise, automotive electrical experts Sandakan, car electrical repair specialists, alternator experts',
};

export default async function AboutPage() {
  const siteConfig = await getSiteConfig();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-yellow-500">C&N Enterprise</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your trusted partner for professional automotive electrical solutions in Sandakan since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-yellow-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-900">
                <p>
                  Founded in 2004, C&N Enterprise has been serving the Sandakan community with 
                  expert automotive electrical repair services. What started as a small workshop has 
                  grown into a trusted name in automotive electrical solutions.
                </p>
                <p>
                  Our team of certified technicians combines traditional expertise with modern 
                  diagnostic equipment to provide comprehensive electrical repair services. We 
                  specialize in alternator repair, starter motor service, and complex electrical 
                  diagnostics.
                </p>
                <p>
                  At C&N Enterprise, we believe in honest service, transparent pricing, and 
                  building long-term relationships with our customers. Every vehicle that comes 
                  through our doors receives the same level of professional care and attention 
                  to detail.
                </p>
              </div>
            </div>

            <div className="bg-yellow-500 rounded-2xl p-8 border-2 border-yellow-600 shadow-lg">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900">Quality workmanship guaranteed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900">Honest and transparent pricing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900">Fast and reliable service</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 border border-yellow-600"></div>
                    <span className="text-gray-900">Customer satisfaction focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-yellow-500">C&N Enterprise</span>?
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              We&apos;re not just another repair shop. Here&apos;s what makes us different.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 border-2 border-yellow-600 shadow-md">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">20+ Years Experience</h3>
              <p className="text-gray-700">
                Over two decades of experience in automotive electrical systems, from classic cars to modern vehicles.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 border-2 border-yellow-600 shadow-md">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Certified Technicians</h3>
              <p className="text-gray-700">
                Our team consists of certified automotive electrical technicians with continuous training on latest technologies.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 border-2 border-yellow-600 shadow-md">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-700">
                We stand behind our work with comprehensive warranties on both parts and labor for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our <span className="text-yellow-500">Workshop</span>
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Address</h3>
                  <p className="text-gray-800">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.streetLine2 && <>{siteConfig.address.streetLine2}<br /></>}
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
                    {siteConfig.address.country}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-800">
                    Phone: {siteConfig.phone} (Main)<br />
                    Phone: {siteConfig.phoneSecondary}, {siteConfig.phoneThird}<br />
                    WhatsApp: {siteConfig.whatsapp}<br />
                    Email: {siteConfig.email}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-900">Operating Hours</h3>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-2">
                  {Object.entries(siteConfig.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="capitalize font-medium text-black">{day}:</span>
                      <span className="text-gray-800 font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Experience the C&N Difference?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Contact us today for professional automotive electrical services you can trust.
          </p>
          <a
            href={getWhatsAppUrl('Hi, I would like to learn more about C&N Enterprise services')}
            className="bg-black text-yellow-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 active:scale-95 hover:scale-105 transition-all duration-200 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}