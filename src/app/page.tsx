import Hero from '@/components/marketing/Hero';
import ServiceCard from '@/components/marketing/ServiceCard';
import { getReviews } from '@/lib/content';

export default async function Home() {
  const reviews = await getReviews();

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-500">Expert Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Professional automotive electrical repair services and quality parts supply to get your vehicle back on the road safely and reliably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Alternator Repair & Sales"
              description="Expert diagnosis, repair and replacement of alternators. We also supply quality alternator parts and accessories."
              features={["Complete diagnosis", "Quality parts supply", "Repair & replacement", "Warranty included"]}
              href="/services/alternator-repair"
              icon={
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              }
            />
            
            <ServiceCard
              title="Starter Motor Repair & Sales"
              description="Professional starter motor diagnosis, repair and parts supply for reliable engine starting."
              features={["Comprehensive testing", "Expert repairs", "Parts supply", "Quality guarantee"]}
              href="/services/starter-repair"
              icon={
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              }
            />
            
            <ServiceCard
              title="Electrical Diagnostics & Parts"
              description="Advanced electrical system diagnostics and supply of electrical components and accessories."
              features={["Advanced diagnostics", "Wiring repair", "Electrical parts supply", "Professional service"]}
              href="/services/wiring-diagnostics"
              icon={
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our <span className="text-yellow-500">Customers Say</span>
              </h2>
              <p className="text-lg text-gray-700">
                Don&apos;t just take our word for it - hear from our satisfied customers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.slice(0, 4).map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">&quot;{review.comment}&quot;</p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-gray-700">{review.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
