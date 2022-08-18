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
      name: 'serviceImg',
      title: 'service Image',
      type: 'image',
      option: {
        hotspot: true
      }
    }
  ]
};