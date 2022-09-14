export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
    },
    {
      name: 'serviceDesc',
      title: 'Service Description',
      type: 'text',
    },
    {
      name: 'serviceImgs',
      title: 'service Image',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      option: {
        hotspot: true
      }
    },
    {
      title: 'With image',
      name: 'withImage',
      type: 'boolean'
    },
    {
      title: 'Add to estimate service list',
      name: 'addEstimateServiceList',
      type: 'boolean'
    },
    {
      title: 'With description',
      name: 'withDescription',
      type: 'boolean'
    },
    {
      title: 'order',
      name: 'order',
      type: 'number'
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
  ]
};