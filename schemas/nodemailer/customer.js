export default {
  name: 'customer',
  title: 'Customer',
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
      name: 'Slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'email'
      }
    }
  ]
};