export default {
  name: 'about',
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
    }
  ]
};