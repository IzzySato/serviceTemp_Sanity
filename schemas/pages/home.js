export default {
  name: 'home',
  title: 'Home page',
  type: 'document',
  fields: [
    {
      name: 'homeTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'homeMainImg',
      title: 'Main Image',
      type: 'image',
      option: {
        hotspot: true
      }
    },
    {
      name: 'bgdColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
    },
    {
      name: 'fontColorLighter',
      title: 'Font Lighter Color',
      type: 'string',
    },
    {
      name: 'fontColorDarker',
      title: 'Font Lighter Color',
      type: 'string',
    },
  ]
};