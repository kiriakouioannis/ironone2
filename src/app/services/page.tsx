import { CheckCircle, Zap, Star, Crown, Users, Building2, Calendar, Truck, Sparkles, PackageCheck } from 'lucide-react';
import Image from 'next/image';
import { getServicesPage } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  CheckCircle,
  Zap,
  Star,
  Crown,
  Users,
  Building2,
  Calendar,
  Truck,
  Sparkles,
  PackageCheck
};

const ServicesPage = async () => {
  const data = await getServicesPage();

  const HeroIcon = data?.heroSection?.badge ? iconMap[data.heroSection.badge] || Sparkles : Sparkles;

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container relative mx-auto px-6 text-center">
          {data?.heroSection?.badge && (
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 mb-6">
              <HeroIcon className="h-4 w-4 text-blue-600 mr-2" />
              <p className="text-sm font-semibold text-blue-700">{data.heroSection.badge}</p>
            </div>
          )}
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl leading-tight"
              dangerouslySetInnerHTML={{ __html: data?.heroSection?.heading || '' }} />
          <p className="mt-8 max-w-2xl mx-auto text-xl leading-8 text-gray-600">
            {data?.heroSection?.subheading}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            {data?.heroSection?.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Services/Pricing Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{data?.pricingSection?.title}</h2>
             <p className="mt-4 text-lg text-gray-600">{data?.pricingSection?.subtitle}</p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-start gap-8 lg:max-w-none lg:grid-cols-3">
            {data?.pricingSection?.plans?.map((plan, index) => {
              const PlanIcon = iconMap[plan.title] || Sparkles;
              return (
                <div key={index} className={`group relative flex flex-col rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ring-1 ${plan.popular ? 'bg-gradient-to-br from-purple-50 to-pink-50 ring-2 ring-purple-400 hover:ring-purple-500 scale-105 hover:scale-110' : 'bg-gradient-to-br from-blue-50 to-purple-50 ring-gray-200 hover:ring-blue-300'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-bold tracking-wide text-white shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-blue-600'}`}>
                      <PlanIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>
                  <p className="mt-3 text-base text-gray-600">{plan.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                    <span className="text-lg font-semibold text-gray-600">{plan.priceUnit}</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-4 text-base text-gray-700">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3 items-start">
                        <CheckCircle className={`h-6 w-6 flex-none mt-0.5 ${plan.popular ? 'text-purple-600' : 'text-blue-600'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={plan.buttonLink} 
                    className={`mt-8 block rounded-xl px-6 py-3.5 text-center text-base font-semibold text-white shadow-md transition-all duration-300 group-hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. "How It Works" Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-20">
             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{data?.howItWorksSection?.title}</h2>
             <p className="mt-4 text-lg text-gray-600">{data?.howItWorksSection?.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {data?.howItWorksSection?.steps?.map((step, index) => {
              const StepIcon = iconMap[step.title] || Calendar;
              return(
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg ring-4 ring-white">
                      <StepIcon className="h-10 w-10" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 font-bold text-sm shadow-md ring-2 ring-blue-200">
                      {step.stepNumber}
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{data?.gallerySection?.title}</h2>
             <p className="mt-4 text-lg text-gray-600">{data?.gallerySection?.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data?.gallerySection?.images?.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image src={urlFor(image).width(600).height(800).url()} alt={image.alt || 'Service image'} width={600} height={800} className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {data?.ctaSection?.title}
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            {data?.ctaSection?.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={data?.ctaSection?.primaryButtonLink || '/booking'}
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {data?.ctaSection?.primaryButtonText}
            </a>
            <a
              href={data?.ctaSection?.secondaryButtonLink || '/contact'}
              className="text-lg font-semibold text-white hover:text-white/80 transition-colors"
            >
              {data?.ctaSection?.secondaryButtonText}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;