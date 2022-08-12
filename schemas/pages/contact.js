export default {
  name: 'contact',
  title: 'Contact page',
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
  ]
};