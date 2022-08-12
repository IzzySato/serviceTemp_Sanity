export default {
  name: 'importFont',
  title: 'CSS Google font link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Font title (e.g. Roboto)',
      type: 'string',
    },
    {
      name: 'rel',
      title: 'rel (e.g. preconnect)',
      type: 'string',
    },
    {
      name: 'href',
      title: 'href (e.g. https://fonts.googleapis.com)',
      type: 'string',
    }
  ]
};