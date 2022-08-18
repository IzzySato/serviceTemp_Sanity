export default {
  name: 'contactPage',
  title: 'Contact us page',
  type: 'document',
  fields: [
    {
      name: 'contactTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'contactImg',
      title: 'Main Image',
      type: 'image',
      option: {
        hotspot: true
      }
    },
    {
      title: 'Contact page Styles',
      name: 'contactStyles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};