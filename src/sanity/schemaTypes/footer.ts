import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'ctaSection',
      title: 'CTA Section (Above Footer)',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'CTA Title'},
        {name: 'description', type: 'text', title: 'CTA Description', rows: 2},
        {
          name: 'buttons',
          type: 'object',
          title: 'CTA Buttons',
          fields: [
            {name: 'primaryText', type: 'string', title: 'Primary Button Text'},
            {name: 'primaryLink', type: 'string', title: 'Primary Button Link'},
            {name: 'secondaryText', type: 'string', title: 'Secondary Button Text'},
            {name: 'secondaryLink', type: 'string', title: 'Secondary Button Link'}
          ]
        },
        {
          name: 'features',
          type: 'array',
          title: 'Feature Points',
          of: [{type: 'string'}],
          description: 'Feature bullets shown below CTA buttons'
        }
      ]
    }),
    defineField({
      name: 'branding',
      title: 'Branding Section',
      type: 'object',
      fields: [
        {name: 'logoText', type: 'string', title: 'Logo Text'},
        {name: 'description', type: 'text', title: 'Brand Description', rows: 3}
      ]
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'sectionTitle', type: 'string', title: 'Section Title'},
        {name: 'email', type: 'string', title: 'Email Address'},
        {name: 'phone', type: 'string', title: 'Phone Number (optional)'},
        {name: 'address', type: 'text', title: 'Address (optional)', rows: 2}
      ]
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {name: 'instagram', type: 'url', title: 'Instagram URL'},
        {name: 'facebook', type: 'url', title: 'Facebook URL'},
        {name: 'twitter', type: 'url', title: 'Twitter URL (optional)'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn URL (optional)'}
      ]
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'text', type: 'string', title: 'Link Text'},
          {name: 'href', type: 'string', title: 'Link URL'}
        ]
      }]
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Leave empty to use "© {year} Ironone. ΟΛΑ ΤΑ ΔΙΚΑΙΩΜΑΤΑ ΔΙΕΘΕΤΟΝΤΑΙ."'
    })
  ]
})
