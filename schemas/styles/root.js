export default {
  name: 'root',
  title: 'CSS Root Values',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (e.g. Font color)',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Root Name (e.g. --font-color)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description (e.g. font color for home page button)',
      type: 'string',
    },
    {
      name: 'data',
      title: 'Data (e.g. #FFFF)',
      type: 'string',
    },
  ]
};