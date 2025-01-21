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
    {
      title: 'Service image slide',
      description: 'If it is not image slide, will display the first image.',
      name: 'imageSlide',
      type: 'boolean'
    },
    {
      title: 'Business Info Box Style',
      name: 'businessInfoBoxStyle',
      type: 'string',
      options: {
        list: [
          {title: 'No image', value: 'noImage'},
          {title: 'Box Left', value: 'boxLeft'},
          {title: 'Without Box', value: 'withoutBox'},
          {title: 'Box Center', value: 'boxCenter'},
        ],
      }
    }
  ]
};