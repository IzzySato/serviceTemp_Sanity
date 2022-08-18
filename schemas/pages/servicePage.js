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
    }
  ]
};