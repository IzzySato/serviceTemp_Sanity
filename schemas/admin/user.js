export default {
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'User email',
      type: 'string'
    },
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
      title: 'User Permission',
      name: 'userPermission',
      type: 'reference',
      to: [{type: 'permission'}]
    }
  ]
};