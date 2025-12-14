import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
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

    // 2. Contact Info Cards
    defineField({
      name: 'contactInfo',
      title: 'Contact Info Cards',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', title: 'Card Title', type: 'string'},
          {name: 'text', title: 'Text/Value', type: 'string'},
          {name: 'link', title: 'Link (optional)', type: 'string'},
          {name: 'icon', title: 'Icon Name', type: 'string', description: 'e.g., Mail, Phone, MapPin, Clock'},
        ]
      }],
      validation: Rule => Rule.max(4)
    }),

    // 3. Contact Form
    defineField({
      name: 'formSection',
      title: 'Form Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {name: 'nameLabel', title: 'Name Label', type: 'string'},
        {name: 'namePlaceholder', title: 'Name Placeholder', type: 'string'},
        {name: 'emailLabel', title: 'Email Label', type: 'string'},
        {name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string'},
        {name: 'phoneLabel', title: 'Phone Label', type: 'string'},
        {name: 'phonePlaceholder', title: 'Phone Placeholder', type: 'string'},
        {name: 'subjectLabel', title: 'Subject Label', type: 'string'},
        {name: 'subjectPlaceholder', title: 'Subject Placeholder', type: 'string'},
        {name: 'messageLabel', title: 'Message Label', type: 'string'},
        {name: 'messagePlaceholder', title: 'Message Placeholder', type: 'string'},
        {name: 'buttonText', title: 'Button Text', type: 'string'},
        {name: 'submittingText', title: 'Submitting Text', type: 'string'},
        {name: 'successMessage', title: 'Success Message', type: 'string'},
        {name: 'errorMessage', title: 'Error Message', type: 'string'},
      ]
    }),

    // Why Choose Us Section
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {
          name: 'reasons',
          title: 'Reasons',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {name: 'title', title: 'Reason Title', type: 'string'},
              {name: 'description', title: 'Description', type: 'text'},
              {name: 'icon', title: 'Icon Name', type: 'string'},
            ]
          }]
        },
        {name: 'emergencyTitle', title: 'Emergency Help Title', type: 'string'},
        {name: 'emergencyPhone', title: 'Emergency Phone', type: 'string'},
      ]
    }),

    // FAQ Prompt
    defineField({
        name: 'faqPrompt',
        title: 'FAQ Prompt',
        type: 'object',
        fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'subtitle', title: 'Subtitle', type: 'string'},
            {name: 'buttonText', title: 'Button Text', type: 'string'},
            {name: 'buttonLink', title: 'Button Link', type: 'string'},
        ]
    }),

    // Map Section
    defineField({
      name: 'mapSection',
      title: 'Map Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
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
        {name: 'buttonText', title: 'Button Text', type: 'string'},
        {name: 'buttonLink', title: 'Button Link', type: 'string'},
      ]
    })
  ]
})
