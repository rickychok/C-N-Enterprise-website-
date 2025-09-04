import { Metadata } from 'next';
import { getReviews } from '@/lib/content';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Customer Reviews - C&N Enterprise Automotive Electrical',
  description: 'Read what our customers say about C&N Enterprise automotive electrical repair services in Sandakan. Real reviews from satisfied customers.',
  keywords: 'C&N Enterprise reviews, automotive electrical repair reviews, Sandakan car repair testimonials',
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer <span className="text-yellow-500">Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              See what our satisfied customers say about our automotive electrical repair services in Sandakan.
            </p>
            <a
              href={getWhatsAppUrl('Hi, I would like to book automotive electrical service based on your great reviews')}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200 inline-block"
            >
              Book Your Service
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-800">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                
                <p className="text-gray-900 mb-6 italic">
                  &quot;{review.comment}&quot;
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-yellow-600">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">5000+</div>
              <div className="text-gray-800">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">20+</div>
              <div className="text-gray-800">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">5★</div>
              <div className="text-gray-800">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <div className="text-gray-800">Quality Work</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-yellow-500">Satisfied Customers</span>
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Experience the same quality service that has earned us these excellent reviews. 
            Contact us today for your automotive electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl('Hi, I read your excellent reviews and would like to book automotive electrical service')}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Book Your Service
            </a>
            <a
              href="/contact"
              className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-500 hover:text-black active:scale-95 hover:scale-105 transition-all duration-200"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}