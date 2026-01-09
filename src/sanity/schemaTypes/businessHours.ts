import { defineField, defineType } from 'sanity'

export const businessHoursType = defineType({
  name: 'businessHours',
  title: 'Business Hours',
  type: 'document',
  fields: [
    defineField({
      name: 'dayOfWeek',
      title: 'Day of Week',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'monday' },
          { title: 'Tuesday', value: 'tuesday' },
          { title: 'Wednesday', value: 'wednesday' },
          { title: 'Thursday', value: 'thursday' },
          { title: 'Friday', value: 'friday' },
          { title: 'Saturday', value: 'saturday' },
          { title: 'Sunday', value: 'sunday' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isOpen',
      title: 'Open on this day',
      type: 'boolean',
      description: 'Toggle ON if you are open on this day',
      initialValue: true,
    }),
    defineField({
      name: 'openTime',
      title: 'Opening Time',
      type: 'string',
      description: 'Format: HH:MM (e.g., 09:00)',
      placeholder: '09:00',
      hidden: ({ parent }) => !parent?.isOpen,
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { isOpen?: boolean }
          if (parent?.isOpen && !value) {
            return 'Opening time is required when the day is open'
          }
          if (value && !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
            return 'Time must be in HH:MM format (e.g., 09:00)'
          }
          return true
        }),
    }),
    defineField({
      name: 'closeTime',
      title: 'Closing Time',
      type: 'string',
      description: 'Format: HH:MM (e.g., 17:00)',
      placeholder: '17:00',
      hidden: ({ parent }) => !parent?.isOpen,
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { isOpen?: boolean }
          if (parent?.isOpen && !value) {
            return 'Closing time is required when the day is open'
          }
          if (value && !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
            return 'Time must be in HH:MM format (e.g., 17:00)'
          }
          return true
        }),
    }),
    defineField({
      name: 'breaks',
      title: 'Break Times',
      type: 'array',
      description: 'Add lunch breaks or other closed periods',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'startTime',
              title: 'Break Start',
              type: 'string',
              placeholder: '12:00',
              validation: (rule) => rule.required(),
            },
            {
              name: 'endTime',
              title: 'Break End',
              type: 'string',
              placeholder: '13:00',
              validation: (rule) => rule.required(),
            },
            {
              name: 'reason',
              title: 'Reason (Optional)',
              type: 'string',
              placeholder: 'Lunch break',
            },
          ],
          preview: {
            select: {
              start: 'startTime',
              end: 'endTime',
              reason: 'reason',
            },
            prepare({ start, end, reason }) {
              return {
                title: `${start} - ${end}`,
                subtitle: reason || 'Break',
              }
            },
          },
        },
      ],
      hidden: ({ parent }) => !parent?.isOpen,
    }),
  ],
  preview: {
    select: {
      day: 'dayOfWeek',
      isOpen: 'isOpen',
      openTime: 'openTime',
      closeTime: 'closeTime',
    },
    prepare({ day, isOpen, openTime, closeTime }) {
      const dayCapitalized = day?.charAt(0).toUpperCase() + day?.slice(1) || 'Unknown'
      const status = isOpen ? `${openTime} - ${closeTime}` : 'CLOSED'
      const emoji = isOpen ? '🟢' : '🔴'

      return {
        title: `${emoji} ${dayCapitalized}`,
        subtitle: status,
      }
    },
  },
})
