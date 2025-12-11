import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Section Header',
      type: 'object',
      fields: [
        {name: 'badgeText', type: 'string', title: 'Badge Text'},
        {name: 'title', type: 'string', title: 'Main Title'},
        {name: 'subtitle', type: 'text', title: 'Subtitle', rows: 3}
      ]
    }),
    defineField({
      name: 'services',
      title: 'Services List',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Service Title'},
          {name: 'description', type: 'text', title: 'Service Description', rows: 3},
          {
            name: 'icon',
            type: 'string',
            title: 'Icon Name',
            description: 'lucide-react icon name (e.g., WashingMachine, Shirt, Truck)',
            options: {
              list: [
                {title: 'Washing Machine', value: 'WashingMachine'},
                {title: 'Shirt', value: 'Shirt'},
                {title: 'Truck', value: 'Truck'},
                {title: 'Sparkles', value: 'Sparkles'},
                {title: 'Check Circle', value: 'CheckCircle'},
                {title: 'Clock', value: 'Clock'},
                {title: 'Leaf', value: 'Leaf'}
              ]
            }
          }
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'description',
            icon: 'icon'
          }
        }
      }]
    }),
    defineField({
      name: 'whyHostsLove',
      title: 'Why Hosts Love Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {
          name: 'columns',
          type: 'array',
          title: 'Columns',
          of: [{
            type: 'object',
            fields: [
              {name: 'icon', type: 'string', title: 'Icon Name (Sparkles, Clock, Leaf)'},
              {name: 'title', type: 'string', title: 'Column Title'},
              {name: 'description', type: 'text', title: 'Description', rows: 2},
              {
                name: 'features',
                type: 'array',
                title: 'Feature Points',
                of: [{type: 'string'}]
              }
            ]
          }],
          validation: (Rule) => Rule.max(3)
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Gallery Title'},
        {name: 'subtitle', type: 'text', title: 'Gallery Subtitle', rows: 2},
        {
          name: 'images',
          type: 'array',
          title: 'Gallery Images',
          of: [{
            type: 'object',
            fields: [
              {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
              {name: 'caption', type: 'string', title: 'Image Caption'},
              {name: 'fallbackUrl', type: 'url', title: 'Fallback Image URL (optional)'}
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'CTA Title'},
        {name: 'description', type: 'text', title: 'CTA Description', rows: 3},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'buttonLink', type: 'string', title: 'Button Link'}
      ]
    })
  ]
})
