"use client"
import React from 'react';
import { Instagram, Facebook, Mail, Phone, ArrowRight, MapPin } from 'lucide-react';
import { FooterData } from '../../sanity/lib/queries';
import { usePathname } from 'next/navigation';

interface FooterProps {
  data?: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Hide footer on studio pages
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <>
      {/* 1. Premium Call-to-Action Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container relative mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            {data?.ctaSection?.title || 'Ετοιμοί να αποκτήσετε το χρόνο σας πίσω?'}
          </h2>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            {data?.ctaSection?.description || 'Αφήστε σε εμάς να αναλάβουμε την φροντίδα των λευκών ειδών'}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={data?.ctaSection?.buttons?.primaryLink || '/booking'}
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              {data?.ctaSection?.buttons?.primaryText || 'Κλείστε την Πρώτη σας Παραλαβή'}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={data?.ctaSection?.buttons?.secondaryLink || '/services'}
              className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              {data?.ctaSection?.buttons?.secondaryText || 'Μάθετε περισσότερα για τις υπηρεσίες μας'}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-600 text-sm">
            {data?.ctaSection?.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>{feature}</span>
              </div>
            ))}
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
                {data?.branding?.logoText || 'ironone'}
              </a>
              <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-sm">
                {data?.branding?.description || 'Η κορυφαία υπηρεσία πλυσίματος και σιδερώματος βραχυχρόνιας μίσθωσης.'}
              </p>
              <div className="mt-8 flex gap-4">
                {data?.socialMedia?.instagram && (
                  <a
                    href={data.socialMedia.instagram}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {data?.socialMedia?.facebook && (
                  <a
                    href={data.socialMedia.facebook}
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase mb-6">
                {data?.contact?.sectionTitle || 'ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ'}
              </h3>
              <ul className="space-y-4">
                {data?.contact?.email && (
                  <li className="flex items-start gap-3 text-gray-600">
                    <Mail size={20} className="mt-0.5 flex-shrink-0" />
                    <a href={`mailto:${data.contact.email}`} className="hover:text-blue-600 transition-colors">
                      {data.contact.email}
                    </a>
                  </li>
                )}
                {data?.contact?.phone && (
                  <li className="flex items-start gap-3 text-gray-600">
                    <Phone size={20} className="mt-0.5 flex-shrink-0" />
                    <a href={`tel:${data.contact.phone}`} className="hover:text-blue-600 transition-colors">
                      {data.contact.phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <p>
                {data?.copyrightText || `© ${currentYear} Ironone. ΟΛΑ ΤΑ ΔΙΚΑΙΩΜΑΤΑ ΔΙΕΘΕΤΟΝΤΑΙ.`}
              </p>
              <div className="flex items-center gap-6">
                {data?.legalLinks?.map((link, index) => (
                  <a key={index} href={link.href} className="hover:text-blue-600 transition-colors">
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

