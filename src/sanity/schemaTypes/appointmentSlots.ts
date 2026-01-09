import { defineField, defineType } from 'sanity'

export const appointmentSlotsType = defineType({
  name: 'appointmentSlots',
  title: 'Appointment Time Slots',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Name',
      type: 'string',
      description: 'E.g., "Standard Pickup Times" or "Holiday Hours"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active Configuration',
      type: 'boolean',
      description: 'Toggle ON to use this as the active time slot configuration',
      initialValue: true,
    }),
    defineField({
      name: 'slotDuration',
      title: 'Slot Duration (minutes)',
      type: 'number',
      description: 'How long each appointment slot lasts',
      initialValue: 60,
      validation: (rule) => rule.required().min(15).max(240),
    }),
    defineField({
      name: 'timeSlots',
      title: 'Available Time Slots',
      type: 'array',
      description: 'Add all available pickup/appointment times',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'time',
              title: 'Time',
              type: 'string',
              placeholder: '09:00',
              description: 'Format: HH:MM',
              validation: (rule) =>
                rule.required().custom((value: string | undefined) => {
                  if (!value || !/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
                    return 'Time must be in HH:MM format (e.g., 09:00)'
                  }
                  return true
                }),
            },
            {
              name: 'label',
              title: 'Display Label (Optional)',
              type: 'string',
              placeholder: 'Morning Pickup',
              description: 'Custom label shown to customers',
            },
            {
              name: 'maxBookings',
              title: 'Max Bookings',
              type: 'number',
              description: 'Maximum number of appointments for this slot',
              initialValue: 1,
              validation: (rule) => rule.required().min(1),
            },
            {
              name: 'isEnabled',
              title: 'Enabled',
              type: 'boolean',
              description: 'Toggle OFF to temporarily disable this time slot',
              initialValue: true,
            },
          ],
          preview: {
            select: {
              time: 'time',
              label: 'label',
              isEnabled: 'isEnabled',
              maxBookings: 'maxBookings',
            },
            prepare({ time, label, isEnabled, maxBookings }) {
              const status = isEnabled ? '✅' : '❌'
              const displayLabel = label ? `${time} - ${label}` : time

              return {
                title: `${status} ${displayLabel}`,
                subtitle: `Max bookings: ${maxBookings}`,
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'applicableDays',
      title: 'Applicable Days',
      type: 'array',
      description: 'Which days of the week do these slots apply to?',
      of: [{ type: 'string' }],
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
      },
      initialValue: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    }),
    defineField({
      name: 'effectiveFrom',
      title: 'Effective From',
      type: 'date',
      description: 'Optional: When does this configuration start?',
    }),
    defineField({
      name: 'effectiveUntil',
      title: 'Effective Until',
      type: 'date',
      description: 'Optional: When does this configuration end?',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
      slotsCount: 'timeSlots',
    },
    prepare({ title, isActive, slotsCount }) {
      const status = isActive ? '🟢 ACTIVE' : '⚪ INACTIVE'
      const count = slotsCount?.length || 0

      return {
        title: title || 'Appointment Slots',
        subtitle: `${status} - ${count} time slots`,
      }
    },
  },
})
