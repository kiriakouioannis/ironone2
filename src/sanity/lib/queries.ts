import { sanityFetch } from "./live";

// ============= Hero Section Types =============
type HeroButton = {
  text?: string;
  link?: string;
};

type HeroStatsCard = {
  number?: string;
  label?: string;
  sublabel?: string;
};

export type HeroSectionData = {
  badge?: string;
  heading?: string;
  description?: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
  features?: string[];
  heroImage?: any;
  floatingBadgeText?: string;
  statsCard?: HeroStatsCard;
  trustBrands?: string[];
};

// ============= Services Page Types =============
type Plan = {
  popular?: boolean;
  title: string;
  description: string;
  price: string;
  priceUnit: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
};

type HowItWorksStep = {
  stepNumber: number;
  title: string;
  description: string;
};

type GalleryImage = {
  alt: string;
  asset: any;
};

export type ServicesPageData = {
  heroSection?: {
    badge?: string;
    heading?: string;
    subheading?: string;
    features?: string[];
  };
  pricingSection?: {
    title?: string;
    subtitle?: string;
    plans?: Plan[];
  };
  howItWorksSection?: {
    title?: string;
    subtitle?: string;
    steps?: HowItWorksStep[];
  };
  gallerySection?: {
    title?: string;
    subtitle?: string;
    images?: GalleryImage[];
  };
  ctaSection?: {
    title?: string;
    subtitle?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
  };
};

// ============= About Page Types =============
type Value = {
  title: string;
  description: string;
  icon: string;
};

type Stat = {
  value: string;
  label: string;
  icon: string;
};

export type AboutPageData = {
  heroSection?: {
    badge?: string;
    heading?: string;
    subheading?: string;
  };
  storySection?: {
    badge?: string;
    title?: string;
    paragraph1?: string;
    paragraph2?: string;
    image?: any;
    stat1?: {
      value?: string;
      label?: string;
    };
    stat2?: {
      value?: string;
      label?: string;
    };
  };
  missionSection?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    values?: Value[];
  };
  statsSection?: {
    title?: string;
    subtitle?: string;
    stats?: Stat[];
  };
  ctaSection?: {
    title?: string;
    subtitle?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
  };
};

// ============= Contact Page Types =============
type ContactInfo = {
  title: string;
  text: string;
  link?: string;
  icon: string;
};

type Reason = {
  title: string;
  description: string;
  icon: string;
};

export type ContactPageData = {
  heroSection?: {
    badge?: string;
    heading?: string;
    subheading?: string;
  };
  contactInfo?: ContactInfo[];
  formSection?: {
    title?: string;
    subtitle?: string;
    nameLabel?: string;
    namePlaceholder?: string;
    emailLabel?: string;
    emailPlaceholder?: string;
    phoneLabel?: string;
    phonePlaceholder?: string;
    subjectLabel?: string;
    subjectPlaceholder?: string;
    messageLabel?: string;
    messagePlaceholder?: string;
    buttonText?: string;
    submittingText?: string;
    successMessage?: string;
    errorMessage?: string;
  };
  whyChooseUs?: {
    title?: string;
    reasons?: Reason[];
    emergencyTitle?: string;
    emergencyPhone?: string;
  };
  faqPrompt?: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
  };
  mapSection?: {
    title?: string;
    subtitle?: string;
  };
  ctaSection?: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
  };
};


// ============= Navbar Types =============
export type NavLink = {
  name: string;
  href: string;
};

export type NavbarData = {
  logo: {
    image?: any;
    text: string;
    link: string;
  };
  navigationLinks: NavLink[];
  ctaButton: {
    text: string;
    link: string;
  };
  languageSelector: {
    enabled: boolean;
    defaultLanguage: string;
  };
};

// ============= Footer Types =============
export type FooterData = {
  ctaSection: {
    title: string;
    description: string;
    buttons: {
      primaryText: string;
      primaryLink: string;
      secondaryText: string;
      secondaryLink: string;
    };
    features: string[];
  };
  branding: {
    logoText: string;
    description: string;
  };
  contact: {
    sectionTitle: string;
    email: string;
    phone?: string;
    address?: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  legalLinks: Array<{
    text: string;
    href: string;
  }>;
  copyrightText?: string;
};

// ============= Site Settings Types =============
export type SiteSettingsData = {
  siteName: string;
  siteDescription: string;
  logo?: any;
  favicon?: any;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage?: any;
  };
};

// ============= Booking Page Types =============
export type ServiceType = {
  title: string;
  value: string;
};

export type BookingPageData = {
  title?: string;
  subtitle?: string;
  calendarStep?: {
    title?: string;
    monthNames?: string[];
    dayNames?: string[];
  };
  timeStep?: {
    title?: string;
    backButtonText?: string;
    availableHours?: string[];
  };
  formStep?: {
    title?: string;
    backButtonText?: string;
    nameLabel?: string;
    namePlaceholder?: string;
    emailLabel?: string;
    emailPlaceholder?: string;
    phoneLabel?: string;
    phonePlaceholder?: string;
    addressLabel?: string;
    addressPlaceholder?: string;
    serviceTypeLabel?: string;
    serviceTypes?: ServiceType[];
    notesLabel?: string;
    notesPlaceholder?: string;
    submitButtonText?: string;
    submittingButtonText?: string;
    errorMessage?: string;
  };
  confirmationStep?: {
    title?: string;
    message?: string;
    detailsTitle?: string;
    dateLabel?: string;
    timeLabel?: string;
    serviceLabel?: string;
    addressLabel?: string;
    newAppointmentButtonText?: string;
  };
};

// ============= GROQ Queries =============

export async function getHeroSection() {
  const query = `*[_type == "heroSection"][0]{
    badge,
    heading,
    description,
    primaryButton,
    secondaryButton,
    features,
    heroImage,
    floatingBadgeText,
    statsCard,
    trustBrands
  }`;

  return await sanityFetch<HeroSectionData>({ query, revalidate: 60 });
}

export async function getServicesPage() {
  const query = `*[_type == "servicesPage"][0]{
    heroSection,
    pricingSection,
    howItWorksSection,
    gallerySection,
    ctaSection
  }`;
  return await sanityFetch<ServicesPageData>({query, revalidate: 60});
}

export async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0]{
    heroSection,
    storySection,
    missionSection,
    statsSection,
    ctaSection
  }`;
  return await sanityFetch<AboutPageData>({query, revalidate: 60});
}

export async function getContactPage() {
  const query = `*[_type == "contactPage"][0]`;
  return await sanityFetch<ContactPageData>({query, revalidate: 60});
}

export async function getNavbarData() {
  const query = `*[_type == "navbar"][0]{
    logo,
    navigationLinks,
    ctaButton,
    languageSelector
  }`;

  return await sanityFetch<NavbarData>({ query, revalidate: 60 });
}

export async function getFooter() {
  const query = `*[_type == "footer"][0]{
    ctaSection,
    branding,
    contact,
    socialMedia,
    legalLinks,
    copyrightText
  }`;

  return await sanityFetch<FooterData>({ query, revalidate: 60 });
}

export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0]{
    siteName,
    siteDescription,
    logo,
    favicon,
    contact,
    socialMedia,
    seo
  }`;

  return await sanityFetch<SiteSettingsData>({ query, revalidate: 60 });
}

export async function getBookingPage() {
  const query = `*[_type == "bookingPage"][0]{
    title,
    subtitle,
    calendarStep,
    timeStep,
    formStep,
    confirmationStep
  }`;

  return await sanityFetch<BookingPageData>({ query, revalidate: 60 });
}
