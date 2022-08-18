export default {
  name: 'global',
  title: 'Global',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      readOnly: true,
      initialValue: 'Global CSS'
    },
    {
      title: 'GlobalStyles',
      name: 'styles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};