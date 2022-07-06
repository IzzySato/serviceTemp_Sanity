export default {
  name: 'customer',
  title: 'Customer Request',
  type: 'document',
  fields: [
    {
      name: 'fName',
      title: 'First Name',
      type: 'string'
    },
    {
      name: 'lName',
      title: 'Last Name',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'email',
      title: 'email',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
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
    },
    {
      name: 'replyDone',
      title: 'Replied',
      type: 'boolean'
    }
  ]
};