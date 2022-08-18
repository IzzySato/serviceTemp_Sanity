export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      readOnly: true,
      initialValue: 'Footer'
    },
    {
      title: 'Footer Styles',
      name: 'styles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};