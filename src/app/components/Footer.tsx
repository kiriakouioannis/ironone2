import { Instagram, Facebook, Mail, Phone, ArrowRight, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* 1. Premium Call-to-Action Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container relative mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            Ready for Spotless Linens<br />and More Free Time?
          </h2>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            Let us handle the laundry. You focus on being a 5-star host.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              Schedule Your First Pickup
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              Learn more about our service
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>24-48 hour turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Hotel-quality finish</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Same-day pickup available</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Footer Section */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Branding & Socials Column */}
            <div>
              <a href="/" className="text-3xl font-bold text-blue-600">
                ironone
              </a>
              <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-sm">
                The premier wash & iron service for short-term rental hosts. We understand your needs because we've been in your shoes.
              </p>
              <div className="mt-8 flex gap-4">
                <a 
                  href="#" 
                  aria-label="Instagram" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  aria-label="Facebook" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-6">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <Mail size={20} className="mt-0.5 flex-shrink-0" />
                  <a href="mailto:hello@ironone.com" className="hover:text-blue-600 transition-colors">
                    hello@ironone.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <Phone size={20} className="mt-0.5 flex-shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-blue-600 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Serving Greater Metro Area</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <p>&copy; {currentYear} Ironone. All Rights Reserved.</p>
              <div className="flex items-center gap-6">
                <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;