'use client';

import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { ContactPageData } from '@/sanity/lib/queries';

const iconMap: { [key: string]: React.ComponentType<any> } = {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
};

export default function ContactClientPage({ data }: { data: ContactPageData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data?.formSection?.successMessage || 'Your message has been sent successfully! We will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: responseData.message || data?.formSection?.errorMessage || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const HeroIcon = data?.heroSection?.badge ? iconMap[data.heroSection.badge] || MessageCircle : MessageCircle;

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
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl leading-tight">
            {data?.heroSection?.heading}
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl leading-8 text-gray-600">
            {data?.heroSection?.subheading}
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 -mt-16">
            {data?.contactInfo?.map((info, index) => {
                const InfoIcon = iconMap[info.icon] || Mail;
                return (
                    <div key={index} className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-4">
                            <InfoIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                        <a href={info.link || '#'} className="text-blue-600 hover:text-blue-700 transition-colors">
                            {info.text}
                        </a>
                    </div>
                )
            })}
          </div>
        </div>
      </section>

      {/* 3. Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                {data?.formSection?.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {data?.formSection?.subtitle}
              </p>

              {submitStatus.type && (
                <div
                  className={`mb-6 rounded-lg p-4 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    {data?.formSection?.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder={data?.formSection?.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    {data?.formSection?.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder={data?.formSection?.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    {data?.formSection?.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder={data?.formSection?.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    {data?.formSection?.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder={data?.formSection?.subjectPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    {data?.formSection?.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all resize-none"
                    placeholder={data?.formSection?.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? data?.formSection?.submittingText : data?.formSection?.buttonText}
                </button>
              </form>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {data?.whyChooseUs?.title}
                </h3>
                
                <div className="space-y-6">
                    {data?.whyChooseUs?.reasons?.map((reason, index) => {
                        const ReasonIcon = iconMap[reason.icon] || Clock;
                        return(
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                    <ReasonIcon className="h-5 w-5 text-white" />
                                </div>
                                </div>
                                <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-1">{reason.title}</h4>
                                <p className="text-gray-600">{reason.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    {data?.whyChooseUs?.emergencyTitle}
                  </p>
                  <a
                    href={`tel:${data?.whyChooseUs?.emergencyPhone}`}
                    className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {data?.whyChooseUs?.emergencyPhone}
                  </a>
                </div>
              </div>

              {/* FAQ Prompt */}
              <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {data?.faqPrompt?.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {data?.faqPrompt?.subtitle}
                </p>
                <a
                  href={data?.faqPrompt?.buttonLink || '#'}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  {data?.faqPrompt?.buttonText}
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Map Section (Optional) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-700">{data?.mapSection?.title}</p>
                <p className="text-gray-500 mt-2">{data?.mapSection?.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {data?.ctaSection?.title}
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            {data?.ctaSection?.subtitle}
          </p>
          <div className="mt-10">
            <a
              href={data?.ctaSection?.buttonLink || '/booking'}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {data?.ctaSection?.buttonText}
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
