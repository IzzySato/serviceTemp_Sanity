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
        to: [{ type: 'root' }]
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
    {
      name: 'estimateComponent',
      title: 'Estimate Component',
      description: 'Add Estimate component to the landing page?',
      type: 'boolean'
    },
    {
      name: 'serviceComponent',
      title: 'Service Component',
      description: 'Add Service component to the landing page?',
      type: 'boolean'
    },
    {
      name: 'testimonialComponent',
      title: 'Testimonial Component',
      description: 'Add Testimonial component to the landing page?',
      type: 'boolean'
    },
  ]
};