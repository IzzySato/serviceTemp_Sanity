export default {
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      title: 'Home page title',
      description: 'Text above services. default text is \'OUR SERVICES\'',
      name: 'homeTitle',
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
    {
      title: 'Home page Styles',
      name: 'homeStyles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};