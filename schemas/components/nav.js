export default {
  name: 'nav',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      readOnly: true,
      initialValue: 'Navigation'
    },
    {
      title: 'Navigation Styles',
      name: 'styles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};