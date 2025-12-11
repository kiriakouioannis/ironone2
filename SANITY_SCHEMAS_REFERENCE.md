# Sanity Schemas Reference

## Complete Schema Structure

### 1. Hero Section Schema
**File:** `src/sanity/schemaTypes/heroSection.ts`

```typescript
{
  badge: string                    // Top badge text
  heading: string                  // Main heading
  description: text                // Description paragraph
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton: {
    text: string
    link: string
  }
  features: string[]              // Array of feature points (max 3)
  heroImage: image                // Main hero image with hotspot
  floatingBadgeText: string       // Floating badge text
  statsCard: {
    number: string
    label: string
    sublabel: string
  }
  trustBrands: string[]          // Array of brand names
}
```

### 2. Services Section Schema
**File:** `src/sanity/schemaTypes/servicesSection.ts`

```typescript
{
  header: {
    badgeText: string
    title: string
    subtitle: text
  }
  services: [{
    title: string
    description: text
    icon: string                  // Icon name from lucide-react
  }]
  whyHostsLove: {
    title: string
    columns: [{
      icon: string
      title: string
      description: text
      features: string[]          // Optional feature list
    }]
  }
  gallery: {
    title: string
    subtitle: text
    images: [{
      image: image
      caption: string
      fallbackUrl: url            // Optional fallback
    }]
  }
  ctaSection: {
    title: string
    description: text
    buttonText: string
    buttonLink: string
  }
}
```

### 3. Navbar Schema
**File:** `src/sanity/schemaTypes/navbar.ts`

```typescript
{
  logo: {
    image: image
    text: string
    link: string
  }
  navigationLinks: [{
    name: string
    href: string
  }]
  ctaButton: {
    text: string
    link: string
  }
  languageSelector: {
    enabled: boolean
    defaultLanguage: string
  }
}
```

### 4. Footer Schema
**File:** `src/sanity/schemaTypes/footer.ts`

```typescript
{
  ctaSection: {
    title: string
    description: text
    buttons: {
      primaryText: string
      primaryLink: string
      secondaryText: string
      secondaryLink: string
    }
    features: string[]
  }
  branding: {
    logoText: string
    description: text
  }
  contact: {
    sectionTitle: string
    email: string
    phone: string               // Optional
    address: text              // Optional
  }
  socialMedia: {
    instagram: url
    facebook: url
    twitter: url               // Optional
    linkedin: url              // Optional
  }
  legalLinks: [{
    text: string
    href: string
  }]
  copyrightText: string        // Optional
}
```

### 5. Site Settings Schema
**File:** `src/sanity/schemaTypes/siteSettings.ts`

```typescript
{
  siteName: string              // Required
  siteDescription: text
  logo: image
  favicon: image
  contact: {
    email: string
    phone: string
    address: text
  }
  socialMedia: {
    instagram: url
    facebook: url
    twitter: url
    linkedin: url
  }
  seo: {
    metaTitle: string
    metaDescription: text
    keywords: string[]
    ogImage: image
  }
}
```

---

## GROQ Queries Reference

### Available Query Functions

All queries are located in `src/sanity/lib/queries.ts`:

```typescript
// Fetch hero section data
getHeroSection(): Promise<HeroSectionData>

// Fetch services section data
getServicesSection(): Promise<ServicesSectionData>

// Fetch navbar data
getNavbar(): Promise<NavbarData>

// Fetch footer data
getFooter(): Promise<FooterData>

// Fetch site settings
getSiteSettings(): Promise<SiteSettingsData>
```

### Usage Example

```typescript
import { getHeroSection, getServicesSection } from '@/sanity/lib/queries';

// In a Server Component
export default async function HomePage() {
  const heroData = await getHeroSection();
  const servicesData = await getServicesSection();

  return (
    <>
      <HeroSection data={heroData} />
      <ServicesSection data={servicesData} />
    </>
  );
}
```

---

## Icon Reference

Available icons for services and features (from lucide-react):

- **WashingMachine** - For laundry/washing services
- **Shirt** - For ironing/folding services
- **Truck** - For pickup/delivery services
- **Sparkles** - For quality/premium features
- **CheckCircle** - For completed features/benefits
- **Clock** - For time-related features
- **Leaf** - For eco-friendly features

---

## Component Updates

### Components Connected to Sanity:

1. **Hero.tsx** - Server Component ✓
2. **Services.tsx** - Server Component ✓
3. **Navbar.tsx** - Client Component (receives data as props) ✓
4. **Footer.tsx** - Client Component (receives data as props) ✓

### Data Flow:

```
layout.tsx (Server)
  ↓ fetches data
  ├─→ getNavbar() → <Navbar data={...} />
  ├─→ getFooter() → <Footer data={...} />
  └─→ page.tsx (Server)
        ↓ fetches data
        ├─→ getHeroSection() → <Hero />
        └─→ getServicesSection() → <Services />
```

---

## File Structure

```
src/
├── sanity/
│   ├── schemaTypes/
│   │   ├── index.ts               # Exports all schemas
│   │   ├── heroSection.ts         # Hero schema
│   │   ├── servicesSection.ts     # Services schema
│   │   ├── navbar.ts              # Navbar schema
│   │   ├── footer.ts              # Footer schema
│   │   └── siteSettings.ts        # Site settings schema
│   │
│   └── lib/
│       ├── queries.ts             # All GROQ queries
│       ├── image.ts               # Image URL builder
│       └── live.ts                # Sanity fetch utility
│
├── app/
│   ├── components/
│   │   ├── Hero.tsx               # Hero component (Server)
│   │   ├── Services.tsx           # Services component (Server)
│   │   ├── Navbar.tsx             # Navbar component (Client)
│   │   └── Footer.tsx             # Footer component (Client)
│   │
│   ├── layout.tsx                 # Root layout with Navbar/Footer data
│   └── page.tsx                   # Home page
│
└── sanity.config.ts               # Sanity configuration

```

---

## Adding New Content Types

To add a new content type:

1. **Create Schema File:**
   ```typescript
   // src/sanity/schemaTypes/newSection.ts
   import {defineType, defineField} from 'sanity'

   export default defineType({
     name: 'newSection',
     title: 'New Section',
     type: 'document',
     fields: [
       defineField({
         name: 'title',
         title: 'Title',
         type: 'string'
       })
     ]
   })
   ```

2. **Register Schema:**
   ```typescript
   // src/sanity/schemaTypes/index.ts
   import newSection from './newSection'

   export const schemaTypes = [
     // ... existing schemas
     newSection
   ]
   ```

3. **Create GROQ Query:**
   ```typescript
   // src/sanity/lib/queries.ts
   export async function getNewSection() {
     const query = `*[_type == "newSection"][0]{
       title
     }`;
     return await sanityFetch({ query });
   }
   ```

4. **Use in Component:**
   ```typescript
   import { getNewSection } from '@/sanity/lib/queries';

   export default async function NewComponent() {
     const data = await getNewSection();
     return <div>{data?.title}</div>;
   }
   ```

---

## TypeScript Types

All TypeScript types are defined in `src/sanity/lib/queries.ts`:

- `HeroSectionData`
- `ServicesSectionData`
- `NavbarData`
- `FooterData`
- `SiteSettingsData`

These types ensure type safety when using Sanity data in your components.

---

## Image Handling

Images from Sanity are processed using the `urlFor()` function:

```typescript
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

// In component:
{imageData && (
  <Image
    src={urlFor(imageData).url()}
    alt="Description"
    width={800}
    height={600}
  />
)}
```

The `urlFor()` function provides:
- Image optimization
- Automatic format conversion
- Responsive image sizing
- Hotspot/crop support

---
