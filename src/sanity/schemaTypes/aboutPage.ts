import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
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
      ]
    }),

    // 2. Story Section
    defineField({
      name: 'storySection',
      title: 'Story Section',
      type: 'object',
      fields: [
        {name: 'badge', title: 'Badge Text', type: 'string'},
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'paragraph1', title: 'First Paragraph', type: 'text'},
        {name: 'paragraph2', title: 'Second Paragraph', type: 'text'},
        {name: 'image', title: 'Image', type: 'image'},
        {
          name: 'stat1',
          title: 'First Stat',
          type: 'object',
          fields: [
            {name: 'value', title: 'Value', type: 'string'},
            {name: 'label', title: 'Label', type: 'string'},
          ]
        },
        {
          name: 'stat2',
          title: 'Second Stat',
          type: 'object',
          fields: [
            {name: 'value', title: 'Value', type: 'string'},
            {name: 'label', title: 'Label', type: 'string'},
          ]
        },
      ]
    }),

    // 3. Mission Section
    defineField({
      name: 'missionSection',
      title: 'Mission Section',
      type: 'object',
      fields: [
        {name: 'badge', title: 'Badge Text', type: 'string'},
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {
          name: 'values',
          title: 'Values',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'title', title: 'Value Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
              {name: 'icon', title: 'Icon Name', type: 'string', description: 'e.g., Target, Heart, Zap'},
            ]
          }]
        }
      ]
    }),

    // 4. Stats Section
    defineField({
      name: 'statsSection',
      title: 'Stats Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'value', title: 'Value', type: 'string'},
              {name: 'label', title: 'Label', type: 'string'},
              {name: 'icon', title: 'Icon Name', type: 'string', description: 'e.g., Users, Sparkles, Award, Clock'},
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
