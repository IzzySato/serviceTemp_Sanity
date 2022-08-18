export default {
  name: 'contactHeader',
  title: 'Contact Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      readOnly: true,
      initialValue: 'Contact Header'
    },
    {
      title: 'Contact Header Styles',
      name: 'styles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};