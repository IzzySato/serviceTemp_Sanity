export default {
  name: 'permission',
  title: 'Permission',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Permission Name',
      type: 'string',
    },
    {
      name: 'permission',
      title: 'Permission',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Read', value: 'read'},
          {title: 'Write', value: 'write'},
          {title: 'Delete', value: 'delete'},
          {title: 'Edit', value: 'edit'},
          {title: 'Add', value: 'add'},
        ]
      }
    }
  ]
};