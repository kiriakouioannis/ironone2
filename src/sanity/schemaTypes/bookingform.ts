import { defineType } from 'sanity'

export default defineType({
  name: 'booking',
  title: 'Bookings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Property Address',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'service',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Linen Wash', value: 'linen-wash' },
          { title: 'Ironing Service', value: 'ironing' },
          { title: 'Wash & Ironing', value: 'both' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Booking Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'time',
      title: 'Booking Time',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'notes',
      title: 'Additional Notes',
      type: 'text'
    },
    {
      name: 'status',
      title: 'Booking Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      initialValue: 'pending'
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ],
  preview: {
    select: {
      name: 'name',
      date: 'date',
      time: 'time',
      service: 'service'
    },
    prepare({ name, date, time, service }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title: name || 'Unknown Customer',
        subtitle: `${formattedDate} at ${time || 'N/A'} - ${service || 'N/A'}`
      }
    }
  }
})
