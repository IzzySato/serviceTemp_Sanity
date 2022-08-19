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
    },
    {
      name: 'servicePageServiceStyle',
      title: 'Service Style',
      type: 'string',
      options: {
        list: [
          { title: 'style 1 (with image)', value: 'style1' },
          { title: 'style 2 (without image)', value: 'style2' }
        ],
        layout: 'radio'
      }
    },
  ]
};