export default {
  name: 'request',
  title: 'Customer estimate request',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
    },
    {
      title: 'Customer',
      name: 'customerInfo',
      type: 'reference',
      to: [{ type: 'customer'}]
    },
    {
      title: 'Received date',
      name: 'receivedDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    }
  ]
};