import React from 'react';
import { Sparkles, Check } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6 animate-pulse">
              Από οικοδεσπότες σε οικοδεσπότες
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Απαλλαχτείτε από το πλύσιμο των ρούχων για το κατάλυμα σας
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Επαγγελματικές υπηρεσίες πλυσίματος και σιδερώματος για καταλύματα βραχυχρόνιας μίσθωσης. Υψηλή ποιότητα υπηρεσίας για λευκά είδη έτοιμα προς χρήση.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="/booking"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Κλείσε την πρώτη σου παραλαβή
              </a>
              <a 
                href="/services"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition text-center"
              >
                Μάθε λεπτομέρειες
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>24-48 ώρες παράδοση</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>Άψογο αποτέλεσμα</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <span>Οικολογικά προϊόντα</span>
              </div>
            </div>
          </div>

          {/* Right Visual with Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1 rounded-3xl">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              {/* Main Image */}
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl">
                <img
                  src="a.png"
                  alt="Freshly ironed white linens stacked perfectly"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow z-20">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-white"></div>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">500+ Hosts</div>
                  <div className="text-sm text-gray-600">Trust Ironone</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -left-4 bg-green-500 text-white rounded-full px-4 py-2 shadow-lg text-sm font-semibold z-20 animate-bounce">
              ⚡ Same-day pickup
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-8 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-8 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm mb-8">TRUSTED BY LEADING HOSTS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Airbnb</div>
            <div className="text-2xl font-bold text-gray-400">Vrbo</div>
            <div className="text-2xl font-bold text-gray-400">Booking.com</div>
            <div className="text-2xl font-bold text-gray-400">HomeAway</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
