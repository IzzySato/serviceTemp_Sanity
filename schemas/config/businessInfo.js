export default {
  name: 'info',
  title: 'Business Info',
  type: 'document',
  fields: [
    {
      name: 'busInfo',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'phoneNum',
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
  ]
};