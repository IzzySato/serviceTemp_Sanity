export default {
  name: 'request',
  title: 'Customer Request',
  type: 'document',
  fields: [
    {
      name: 'customerInfo',
      title: 'Customer Info',
      type: 'reference',
      to: [ {type: 'customer'} ]
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    }
  ]
};