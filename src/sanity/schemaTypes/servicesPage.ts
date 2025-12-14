import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // 1. Hero Section
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'badge', title: 'Badge Text', type: 'string'},
        {name: 'heading', title: 'Heading', type: 'text', rows: 2},
        {name: 'subheading', title: 'Subheading', type: 'text', rows: 3},
        {
          name: 'features', 
          title: 'Features', 
          type: 'array', 
          of: [{type: 'string'}],
          validation: Rule => Rule.max(3)
        },
      ]
    }),

    // 2. Services/Pricing Section
    defineField({
      name: 'pricingSection',
      title: 'Pricing Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {
          name: 'plans',
          title: 'Pricing Plans',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'popular', title: 'Most Popular?', type: 'boolean'},
              {name: 'title', title: 'Plan Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
              {name: 'price', title: 'Price', type: 'string'},
              {name: 'priceUnit', title: 'Price Unit', type: 'string', description: 'e.g., / kg'},
              {
                name: 'features', 
                title: 'Features', 
                type: 'array', 
                of: [{type: 'string'}]
              },
              {name: 'buttonText', title: 'Button Text', type: 'string'},
              {name: 'buttonLink', title: 'Button Link', type: 'string'},
            ]
          }]
        }
      ]
    }),
    
    // 3. "How It Works" Section
    defineField({
      name: 'howItWorksSection',
      title: 'How It Works Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'stepNumber', title: 'Step Number', type: 'number'},
              {name: 'title', title: 'Step Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
            ]
          }],
          validation: Rule => Rule.max(4)
        }
      ]
    }),

    // 4. Image Gallery Section
    defineField({
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{
            type: 'image',
            fields: [
              {name: 'alt', title: 'Alt Text', type: 'string'}
            ]
          }]
        }
      ]
    }),

    // 5. CTA Section
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {name: 'primaryButtonText', title: 'Primary Button Text', type: 'string'},
        {name: 'primaryButtonLink', title: 'Primary Button Link', type: 'string'},
        {name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string'},
        {name: 'secondaryButtonLink', title: 'Secondary Button Link', type: 'string'},
      ]
    })
  ]
})
