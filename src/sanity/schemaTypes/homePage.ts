export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
      {
        name: 'seo',
        title: 'SEO Settings',
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Page Title'},
          {name: 'description', type: 'text', title: 'Meta Description'},
        ]
      },
      {
        name: 'heroSection',
        title: 'Hero Section',
        type: 'reference',
        to: [{type: 'heroSection'}]
      },
      {
        name: 'featuresSection',
        title: 'Features Section',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {name: 'title', type: 'string'},
              {name: 'description', type: 'text'},
              {name: 'icon', type: 'image'}
            ]
          }
        ]
      }
    ]
  }