export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      title: 'Testimonial title',
      description: 'e.g. Testimonials || if you do not want, leave empty',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            title: 'Customer Name',
            name: 'name',
            type: 'string'
          },
          {
            title: 'Comment',
            name: 'comment',
            type: 'text'
          },
        ]
      }],
    },
    {
      title: 'Testimonial Styles',
      name: 'testimonialStyles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'root' }]
      }],
    }
  ]
};