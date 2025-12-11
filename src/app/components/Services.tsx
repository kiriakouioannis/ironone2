import React from "react";
import { WashingMachine, Shirt, Truck, Sparkles, CheckCircle, Clock, Leaf } from "lucide-react";
import { getServicesSection } from '../../sanity/lib/queries';
import { urlFor } from '../../sanity/lib/image';
import Image from 'next/image';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  WashingMachine,
  Shirt,
  Truck,
  Sparkles,
  CheckCircle,
  Clock,
  Leaf
};

const ServicesSection = async () => {
  const data = await getServicesSection();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700">{data.header?.badgeText || 'ΥΠΗΡΕΣΙΕΣ'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.header?.title || 'Ό,τι χρειάζεστε για Λευκά Είδη'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {data.header?.subtitle || 'Επιμελής καθαρισμός με οικολογικά απορρυπαντικά'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {data.services?.map((service, index) => {
            const IconComponent = iconMap[service.icon] || WashingMachine;
            return (
              <div
                key={index}
                className="bg-white hover:shadow-xl transition-all duration-300 rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={40} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

            {/* Why Hosts Love Ironone Section */}
<div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 text-white mb-20">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-3xl md:text-4xl font-bold mb-6">
      {data.whyHostsLove?.title || 'Γιατί μας προτιμούν οι οικοδεσπότες'}
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      {data.whyHostsLove?.columns?.map((column, index) => {
        const ColumnIcon = iconMap[column.icon] || Sparkles;
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white/20 rounded-full p-4 mb-4">
              <ColumnIcon className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-4">{column.title}</h4>
            {column.features && column.features.length > 0 ? (
              <ul className="text-white text-left space-y-2">
                {column.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-white mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-blue-100 text-center">{column.description}</p>
            )}
          </div>
        );
      })}
    </div>
  </div>
</div>


        {/* Image Gallery Section */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {data.gallery?.title || 'Δείτε τη διαφορά'}
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {data.gallery?.subtitle || 'Προφεσσονάλ αποτελέσματα που κάνουν τα ιδιοκτησιακά σας αντικείμενα φωτιστά'}
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.gallery?.images?.map((imageData, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                {imageData.image ? (
                  <Image
                    src={urlFor(imageData.image).url()}
                    alt={imageData.caption || 'Gallery image'}
                    width={600}
                    height={800}
                    className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300"
                  />
                ) : imageData.fallbackUrl ? (
                  <img
                    src={imageData.fallbackUrl}
                    alt={imageData.caption || 'Gallery image'}
                    className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">{imageData.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section - Book Now */}
        <div className="text-center mt-16 bg-gray-50 py-12 rounded-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {data.ctaSection?.title || 'Κλείστε την πρώτη σας παραλαβή'}
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {data.ctaSection?.description || 'Είστε έτοιμοι για πεντακάθαρο ιματισμό;'}
          </p>

          <a
            href={data.ctaSection?.buttonLink || '/booking'}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>{data.ctaSection?.buttonText || 'Προγραμματίστε την πρώτη σας παραλαβή'}</span>
            <Sparkles className="ml-2 w-5 h-5" />
          </a>
        </div>
                  
       
      </div>
    </section>
  );
};

export default ServicesSection;
