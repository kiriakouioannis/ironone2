import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'object',
      fields: [
        {name: 'image', type: 'image', title: 'Logo Image', options: {hotspot: true}},
        {name: 'text', type: 'string', title: 'Logo Text (e.g., ironone)'},
        {name: 'link', type: 'string', title: 'Logo Link', initialValue: '/'}
      ]
    }),
    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Link Name'},
          {name: 'href', type: 'string', title: 'Link URL'}
        ],
        preview: {
          select: {
            title: 'name',
            subtitle: 'href'
          }
        }
      }]
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Button Text'},
        {name: 'link', type: 'string', title: 'Button Link'}
      ]
    }),
    defineField({
      name: 'languageSelector',
      title: 'Language Selector',
      type: 'object',
      fields: [
        {name: 'enabled', type: 'boolean', title: 'Show Language Selector', initialValue: true},
        {name: 'defaultLanguage', type: 'string', title: 'Default Language Code', initialValue: 'EN'}
      ]
    })
  ]
})
