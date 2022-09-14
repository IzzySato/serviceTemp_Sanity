export default {
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    {
      name: 'servicePageTitle',
      title: 'Service page Title',
      type: 'string',
    },
    {
      title: 'Service page Styles',
      name: 'serviceStyles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    },
    {
      name: 'estimateComponent',
      title: 'Estimate Component',
      description: 'Add Estimate component to the landing page?',
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
  ]
};