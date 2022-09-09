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
  ]
};