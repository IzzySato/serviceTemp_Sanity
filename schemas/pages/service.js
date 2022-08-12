export default {
  name: 'service',
  title: 'Service page',
  type: 'document',
  fields: [
    {
      name: 'serviceTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'serviceDesc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'serviceImg',
      title: 'service Image',
      type: 'image',
      option: {
        hotspot: true
      }
    }
  ]
};