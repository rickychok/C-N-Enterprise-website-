'use client';

import { getWhatsAppUrl } from '@/lib/whatsapp';

function submitContactForm() {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const service = (document.getElementById('service') as HTMLSelectElement).value;
  const message = (document.getElementById('message') as HTMLTextAreaElement).value;
  
  if (!name || !phone || !service) {
    alert('Please fill in all required fields');
    return;
  }
  
  const whatsappMessage = `Hi, my name is ${name}.

Service needed: ${service}
Phone: ${phone}

Message: ${message}

Please contact me about automotive electrical service.`;
  
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);
  window.open(whatsappUrl, '_blank');
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-yellow-500">C&N Enterprise</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our automotive electrical experts. We are here to help with all your electrical repair needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+601118696757?text=Hi,%20I%20need%20automotive%20electrical%20service%20help"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all duration-200"
              >
                WhatsApp Now
              </a>
              <a
                href="tel:+601118696757"
                className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-500 hover:text-black transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-600 shadow-md">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-700 mb-4">Call us directly for immediate assistance</p>
              <div className="space-y-1">
                <a href="tel:+601118696757" className="text-yellow-600 font-bold hover:text-yellow-500 block">
                  +60 11-1869 6757 (Main)
                </a>
                <a href="tel:+60168305277" className="text-yellow-600 font-bold hover:text-yellow-500 text-sm block">
                  +60 16-8305 277
                </a>
                <a href="tel:+60168305668" className="text-yellow-600 font-bold hover:text-yellow-500 text-sm block">
                  +60 16-8305 668
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-600 shadow-md">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">WhatsApp</h3>
              <p className="text-gray-700 mb-4">Message us for quick responses</p>
              <div className="space-y-1">
                <a 
                  href="https://wa.me/+601118696757?text=Hi,%20I%20need%20automotive%20electrical%20service%20help"
                  className="text-yellow-600 font-bold hover:text-yellow-500 block"
                >
                  +60 11-1869 6757 (Main)
                </a>
                <span className="text-gray-500 text-sm block">Also available: +60 16-8305 277, +60 16-8305 668</span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-600 shadow-md">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-700 mb-4">Send us your inquiry</p>
              <a
                href="mailto:cnnenterprise5757@gmail.com"
                className="text-yellow-600 font-bold hover:text-yellow-500 break-all"
              >
                cnnenterprise5757@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-600 shadow-md">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Location</h3>
              <p className="text-gray-700 mb-4">Visit our workshop</p>
              <p className="text-gray-700">
                Ground Floor, Shop House No 4<br />
                MDLB 1633, Taman Hing Wah<br />
                Batu 8 Jalan Labuk<br />
                Sandakan, Sabah 90000
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a <span className="text-yellow-500">Message</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we will contact you via WhatsApp to discuss your automotive electrical needs.
              </p>
              
              <form id="contactForm" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-black"
                  >
                    <option value="">Select a service</option>
                    <option value="Alternator Repair">Alternator Repair</option>
                    <option value="Starter Motor Repair">Starter Motor Repair</option>
                    <option value="Electrical Diagnostics">Electrical Diagnostics</option>
                    <option value="Charging System Service">Charging System Service</option>
                    <option value="Heavy Machinery Electrical">Heavy Machinery Electrical</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none text-black"
                    placeholder="Describe your electrical issue or requirements..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={submitContactForm}
                  className="w-full bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200"
                >
                  Send via WhatsApp
                </button>
              </form>

            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business <span className="text-yellow-500">Hours</span>
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-black">Monday - Saturday:</span>
                    <span className="text-gray-800 font-medium">8:30 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-black">Sunday:</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-black">Public Holidays:</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-yellow-800">Emergency Service</h3>
                <p className="text-yellow-700">
                  For urgent electrical issues that leave you stranded, contact us via WhatsApp anytime. 
                  We will do our best to provide emergency assistance or guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our <span className="text-yellow-500">Location</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Visit us at our workshop in Taman Hing Wah, Sandakan. We are conveniently located for easy access.
            </p>
          </div>
          
          <div className="bg-white rounded-lg border-2 border-gray-200 shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Taman+Hing+Wah+Sandakan+Sabah&output=embed"
              width="100%"
              height="400"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="C&N Enterprise Location - Taman Hing Wah, Sandakan"
              className="w-full"
            ></iframe>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">C&N Enterprise</p>
                  <p className="text-sm text-gray-600">Automotive & Heavy Machinery Electrical Services</p>
                  <p className="text-sm text-yellow-600 font-medium">+60 11-1869 6757</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C%26N+Enterprise+Sandakan+Sabah+Malaysia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-400 transition-all duration-200"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}