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
    },
    {
      name: 'homeServiceStyle',
      title: 'Service Style',
      type: 'string',
      options: {
        list: [
          { title: 'style 1 (name, image, and description)', value: 'style1' },
          { title: 'style 2 (name and description)', value: 'style2' },
          { title: 'style 3 (name and image)', value: 'style3' },
          { title: 'style 4 (name only)', value: 'style4' }
        ],
        layout: 'radio'
      }
    },
  ]
};