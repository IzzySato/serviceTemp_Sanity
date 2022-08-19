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
    },
    {
      name: 'formStyles',
      title: 'Form Style',
      type: 'string',
      options: {
        list: [
          { title: 'style 1', value: 'style1' },
          { title: 'style 2', value: 'style2' }
        ],
        layout: 'radio'
      }
    },
  ]
};