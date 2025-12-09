import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Top Badge Text',
      type: 'string',
      description: 'Small badge text at top'
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Button Text'},
        {name: 'link', type: 'string', title: 'Button Link'}
      ]
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Button Text'},
        {name: 'link', type: 'string', title: 'Button Link'}
      ]
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(3)
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'floatingBadgeText',
      title: 'Floating Badge Text',
      type: 'string'
    }),
    defineField({
      name: 'statsCard',
      title: 'Stats Card',
      type: 'object',
      fields: [
        {name: 'number', type: 'string', title: 'Number'},
        {name: 'label', type: 'string', title: 'Label'},
        {name: 'sublabel', type: 'string', title: 'Sublabel'}
      ]
    }),
    defineField({
      name: 'trustBrands',
      title: 'Trust Brands',
      type: 'array',
      of: [{type: 'string'}]
    })
  ]
})