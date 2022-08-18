export default {
  name: 'estimate',
  title: 'Estimate Form',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Estimate Form Title',
      type: 'string',
    },
    {
      title: 'Estimate form Styles',
      name: 'styles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};