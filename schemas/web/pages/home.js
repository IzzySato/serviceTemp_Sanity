export default {
  name: 'home',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      name: 'homeTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'homeMainImg',
      title: 'Main Image',
      type: 'image',
      option: {
        hotspot: true
      }
    },
  ]
};