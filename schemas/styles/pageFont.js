export default {
  name: 'pageFont',
  title: 'CSS Google font link',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      readOnly: true,
      initialValue: 'Font for all pages'
    },
    {
      title: 'Font Infomation',
      name: 'fontInfo',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'font'}]
      }],
    },
    {
      title: 'Font family',
      name: 'styles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'root'}]
      }],
    }
  ]
};