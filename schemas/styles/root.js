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
      name: 'rootKey',
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
      title: 'HTML color code, pick color from https://htmlcolorcodes.com. (e.g. #172248)',
      type: 'string',
    },
  ]
};