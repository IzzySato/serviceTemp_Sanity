export default {
  name: 'info',
  title: 'Business Info',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'businessDescription',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'street',
      title: 'Street',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'province',
      title: 'Province',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      option: {
        hotspot: true
      }
    },
    {
      name: 'logoStyles',
      title: 'Logo Style',
      type: 'string',
      options: {
        list: [
          { title: 'logo included business name', value: 'style1' },
          { title: 'logo not included business name', value: 'style2' }
        ],
        layout: 'radio'
      }
    },
  ]
};