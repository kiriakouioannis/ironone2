"use client"
import React from "react";
import { WashingMachine, Shirt, Truck, Sparkles, CheckCircle, Clock } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Professional Linen Washing",
      description: "Deep cleaning with eco-friendly detergents that preserve fabric quality. Hotel-grade washing for sheets, pillowcases, duvet covers, and towels.",
      icon: WashingMachine,
    },
    {
      title: "Expert Ironing & Folding",
      description: "Crisp, wrinkle-free linens perfectly pressed and folded to hotel standards. Every piece looks pristine and ready for your guests.",
      icon: Shirt,
    },
    {
      title: "Convenient Pickup & Delivery",
      description: "Same-day or next-day service available. We collect your linens and return them spotless, right to your door on schedule.",
      icon: Truck,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Perfect Linens
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We handle every step of your linen care, from washing to delivery, so you can focus on creating amazing guest experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-xl transition-all duration-300 rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <service.icon size={40} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 text-white mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Hosts Love Ironone</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">24-48 Hour Turnaround</h4>
                <p className="text-blue-100">Fast service that keeps pace with your bookings</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">100% Quality Guarantee</h4>
                <p className="text-blue-100">Every item inspected to hotel standards</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Eco-Friendly Products</h4>
                <p className="text-blue-100">Safe for guests and the environment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            See the Difference
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional results that make your properties shine
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/j.png" 
                alt="Crisply ironed shirts" 
                className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=800&fit=crop&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">Perfect Ironing</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/f.png" 
                alt="Folded towels" 
                className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=800&fit=crop&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">Fresh Towels</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/l.png" 
                alt="Pristine bed linens" 
                className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=800&fit=crop&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">Crisp Linens</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/h.png" 
                alt="Professional folding" 
                className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=800&fit=crop&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">Hotel Quality</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/i.png" 
                alt="Clean and fresh" 
                className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?w=600&h=800&fit=crop&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">Spotless Clean</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="/j.png" 
                alt="Ready for guests" 
                className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=800&fit=crop&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">Guest Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a 
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Book Your Service Today</span>
            <Sparkles className="ml-2 w-5 h-5" />
          </a>
          <p className="text-gray-600 mt-4">Join 500+ satisfied hosts</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;