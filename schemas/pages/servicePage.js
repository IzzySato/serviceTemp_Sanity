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
          { title: 'style 1 (image, name, and description)', value: 'style1' },
          { title: 'style 2 (name and description)', value: 'style2' },
          { title: 'style 3 (name and image)', value: 'style3' },
          { title: 'style 4 (name only)', value: 'style4' }
        ],
        layout: 'radio'
      }
    },
  ]
};