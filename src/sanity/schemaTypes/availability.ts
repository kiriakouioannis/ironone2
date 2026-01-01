import { defineField, defineType } from 'sanity'

export const availabilityType = defineType({
  name: 'availability',
  title: 'Calendar Availability',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Select a date to block or allow bookings',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isBlocked',
      title: 'Block this date',
      type: 'boolean',
      description: 'Toggle ON to block bookings on this date, OFF to allow',
      initialValue: true,
    }),
    defineField({
      name: 'reason',
      title: 'Reason (Optional)',
      type: 'string',
      description: 'Why is this date blocked? (e.g., "Holiday", "Fully Booked", "Vacation")',
    }),
  ],
  preview: {
    select: {
      date: 'date',
      isBlocked: 'isBlocked',
      reason: 'reason',
    },
    prepare({ date, isBlocked, reason }) {
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      const status = isBlocked ? '🚫 BLOCKED' : '✅ AVAILABLE'
      const subtitle = reason ? `${status} - ${reason}` : status

      return {
        title: formattedDate,
        subtitle: subtitle,
      }
    },
  },
})
