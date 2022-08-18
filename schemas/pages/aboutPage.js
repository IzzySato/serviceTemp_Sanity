export default {
  name: 'aboutPage',
  title: 'About us page',
  type: 'document',
  fields: [
    {
      name: 'aboutTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'aboutDesc',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'aboutImg',
      title: 'About Image',
      type: 'image',
      option: {
        hotspot: true
      }
    },
    {
      title: 'About page Styles',
      name: 'aboutStyles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};