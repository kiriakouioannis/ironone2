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

// ============= Services Section Types =============
export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type WhyHostsColumn = {
  icon: string;
  title: string;
  description?: string;
  features?: string[];
};

export type GalleryImage = {
  image: any;
  caption: string;
  fallbackUrl?: string;
};

export type ServicesSectionData = {
  header: {
    badgeText: string;
    title: string;
    subtitle: string;
  };
  services: Service[];
  whyHostsLove: {
    title: string;
    columns: WhyHostsColumn[];
  };
  gallery: {
    title: string;
    subtitle: string;
    images: GalleryImage[];
  };
  ctaSection: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
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

  return await sanityFetch<HeroSectionData>({ query });
}

export async function getServicesSection() {
  const query = `*[_type == "servicesSection"][0]{
    header,
    services,
    whyHostsLove,
    gallery{
      title,
      subtitle,
      images[]{
        image,
        caption,
        fallbackUrl
      }
    },
    ctaSection
  }`;

  return await sanityFetch<ServicesSectionData>({ query });
}

export async function getNavbar() {
  const query = `*[_type == "navbar"][0]{
    logo,
    navigationLinks,
    ctaButton,
    languageSelector
  }`;

  return await sanityFetch<NavbarData>({ query });
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

  return await sanityFetch<FooterData>({ query });
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

  return await sanityFetch<SiteSettingsData>({ query });
}