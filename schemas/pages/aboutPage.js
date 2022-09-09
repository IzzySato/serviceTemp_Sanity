export default {
  name: 'aboutPage',
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
    },
    {
      title: 'About page Styles',
      name: 'aboutStyles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    },
    {
      name: 'titleDiscBox',
      title: 'Title & Description Box',
      type: 'string',
      options: {
        list: [
          { title: 'with box', value: 'withBox' },
          { title: 'without box', value: 'withoutBox' }
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
      name: 'testimonialComponent',
      title: 'Testimonial Component',
      description: 'Add Testimonial component to the landing page?',
      type: 'boolean'
    },
  ]
};