import { sanityFetch } from "./live";

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