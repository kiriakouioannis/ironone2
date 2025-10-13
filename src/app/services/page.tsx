import { CheckCircle, Zap, Star, Crown, Users, Building2 } from 'lucide-react';
import { Calendar, Truck, Sparkles, PackageCheck } from 'lucide-react';
import Image from 'next/image';

const ServicesPage = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container relative mx-auto px-6 text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <p className="text-sm font-semibold text-blue-700">Our Services</p>
          </div>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl leading-tight">
            Hotel-Quality Linens,<br />Simplified.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl leading-8 text-gray-600">
            Choose the perfect plan for your property. We handle the rest, so you can focus on providing an amazing guest experience.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Free Pickup & Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>24-48 Hour Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Eco-Friendly Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services/Pricing Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Plans</h2>
             <p className="mt-4 text-lg text-gray-600">Simple, transparent pricing designed for hosts.</p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-start gap-8 lg:max-w-none lg:grid-cols-3">
            {/* Service Card 1: Wash & Iron */}
            <div className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ring-1 ring-gray-200 hover:ring-blue-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Wash & Iron</h3>
              <p className="mt-3 text-base text-gray-600">Our complete, all-in-one solution for pristine linens every time.</p>
              <p className="mt-6 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">€3.50</span>
                <span className="text-lg font-semibold text-gray-600">/ kg</span>
              </p>
              <ul role="list" className="mt-8 space-y-4 text-base text-gray-700">
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-blue-600 mt-0.5" />
                  <span>Free Pickup & Delivery</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-blue-600 mt-0.5" />
                  <span>Professional Washing & Drying</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-blue-600 mt-0.5" />
                  <span>Expert Ironing & Folding</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-blue-600 mt-0.5" />
                  <span>Eco-Friendly Detergents</span>
                </li>
              </ul>
              <a 
                href="/booking" 
                className="mt-8 block rounded-xl bg-blue-600 px-6 py-3.5 text-center text-base font-semibold text-white shadow-md hover:bg-blue-700 transition-all duration-300 group-hover:scale-105"
              >
                Choose Plan
              </a>
            </div>

            {/* Service Card 2: Iron Only (Most Popular) */}
            <div className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-2xl ring-2 ring-purple-400 hover:ring-purple-500 transition-all duration-300 scale-105 hover:scale-110">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-bold tracking-wide text-white shadow-lg">
                MOST POPULAR
              </div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                  <Crown className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Iron Only</h3>
              <p className="mt-3 text-base text-gray-600">You wash, we perfect. Get that crisp, hotel-quality finish.</p>
              <p className="mt-6 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">€2.00</span>
                <span className="text-lg font-semibold text-gray-600">/ kg</span>
              </p>
               <ul role="list" className="mt-8 space-y-4 text-base text-gray-700">
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-purple-600 mt-0.5" />
                  <span>Free Pickup & Delivery</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-purple-600 mt-0.5" />
                  <span>Professional Steam Ironing</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-purple-600 mt-0.5" />
                  <span>Immaculate Folding & Packaging</span>
                </li>
              </ul>
              <a 
                href="/booking" 
                className="mt-8 block rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3.5 text-center text-base font-semibold text-white shadow-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
              >
                Choose Plan
              </a>
            </div>

            {/* Service Card 3: Custom/Bulk */}
            <div className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ring-1 ring-gray-200 hover:ring-gray-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Bulk & Commercial</h3>
              <p className="mt-3 text-base text-gray-600">For boutique hotels or hosts managing multiple properties.</p>
              <p className="mt-6 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">Custom</span>
              </p>
               <ul role="list" className="mt-8 space-y-4 text-base text-gray-700">
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-gray-700 mt-0.5" />
                  <span>Tailored Pricing & Schedules</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-gray-700 mt-0.5" />
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <CheckCircle className="h-6 w-6 flex-none text-gray-700 mt-0.5" />
                  <span>All Features Included</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="mt-8 block rounded-xl bg-gray-800 px-6 py-3.5 text-center text-base font-semibold text-white shadow-md hover:bg-gray-900 transition-all duration-300 group-hover:scale-105"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "How It Works" Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-20">
             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Simple 4-Step Process</h2>
             <p className="mt-4 text-lg text-gray-600">Effortless for you, perfect for your guests.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-4 ring-white">
                    <Calendar className="h-10 w-10" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 font-bold text-sm shadow-md ring-2 ring-blue-200">
                    1
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Schedule Pickup</h3>
                <p className="mt-2 text-base text-gray-600">Book a convenient time slot online through our easy calendar.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg ring-4 ring-white">
                    <Truck className="h-10 w-10" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-purple-600 font-bold text-sm shadow-md ring-2 ring-purple-200">
                    2
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">We Collect</h3>
                <p className="mt-2 text-base text-gray-600">We arrive at your location to pick up your linens on time.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg ring-4 ring-white">
                    <Sparkles className="h-10 w-10" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-pink-600 font-bold text-sm shadow-md ring-2 ring-pink-200">
                    3
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">We Perfect</h3>
                <p className="mt-2 text-base text-gray-600">Our experts wash, iron, and fold to hotel-quality standards.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg ring-4 ring-white">
                    <PackageCheck className="h-10 w-10" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-600 font-bold text-sm shadow-md ring-2 ring-green-200">
                    4
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">We Deliver</h3>
                <p className="mt-2 text-base text-gray-600">Fresh, crisp linens delivered ready for your next guest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">A Glimpse of Our Quality</h2>
             <p className="mt-4 text-lg text-gray-600">See the pristine results we deliver every day.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image src="/1.jpg" alt="Crisply ironed shirts" width={600} height={800} className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image src="/2.png" alt="Folded towels" width={600} height={800} className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image src="/3.png" alt="Pristine bed linens" width={600} height={800} className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Join hundreds of hosts who trust Ironone for spotless linens, every time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/booking"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Book Your First Pickup
            </a>
            <a
              href="/contact"
              className="text-lg font-semibold text-white hover:text-white/80 transition-colors"
            >
              Have questions? Contact us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
