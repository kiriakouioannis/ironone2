import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'bookingPage',
  title: 'Booking Page',
  type: 'document',
  fields: [
    // Main Title and Subtitle
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),

    // Step 1: Calendar
    defineField({
      name: 'calendarStep',
      title: 'Calendar Step',
      type: 'object',
      fields: [
        { name: 'title', title: 'Step Title', type: 'string', initialValue: 'Select a Date' },
        { 
          name: 'monthNames', 
          title: 'Month Names', 
          type: 'array', 
          of: [{type: 'string'}],
          initialValue: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        { 
          name: 'dayNames', 
          title: 'Day Names (Short)', 
          type: 'array', 
          of: [{type: 'string'}],
          initialValue: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
      ]
    }),
    
    // Step 2: Time Selection
    defineField({
      name: 'timeStep',
      title: 'Time Selection Step',
      type: 'object',
      fields: [
        { name: 'title', title: 'Step Title', type: 'string', initialValue: 'Select a Time' },
        { name: 'backButtonText', title: 'Back Button Text', type: 'string', initialValue: 'Back to Calendar' },
        { 
          name: 'availableHours', 
          title: 'Available Hours', 
          type: 'array', 
          of: [{type: 'string'}],
          description: 'Enter times in HH:MM format (e.g., 09:00)',
          initialValue: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
        },
      ]
    }),

    // Step 3: Form Details
    defineField({
      name: 'formStep',
      title: 'Form Details Step',
      type: 'object',
      fields: [
        { name: 'title', title: 'Step Title', type: 'string', initialValue: 'Your Information' },
        { name: 'backButtonText', title: 'Back Button Text', type: 'string', initialValue: 'Back to Time Selection' },
        { name: 'nameLabel', title: 'Name Label', type: 'string', initialValue: 'Full Name' },
        { name: 'namePlaceholder', title: 'Name Placeholder', type: 'string', initialValue: 'John Doe' },
        { name: 'emailLabel', title: 'Email Label', type: 'string', initialValue: 'Email Address' },
        { name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string', initialValue: 'john@example.com' },
        { name: 'phoneLabel', title: 'Phone Label', type: 'string', initialValue: 'Phone Number' },
        { name: 'phonePlaceholder', title: 'Phone Placeholder', type: 'string', initialValue: '+1 123 456 7890' },
        { name: 'addressLabel', title: 'Address Label', type: 'string', initialValue: 'Full Address' },
        { name: 'addressPlaceholder', title: 'Address Placeholder', type: 'string', initialValue: '123 Main St, City, Country' },
        { name: 'serviceTypeLabel', title: 'Service Type Label', type: 'string', initialValue: 'Service Type' },
        { 
          name: 'serviceTypes', 
          title: 'Service Types', 
          type: 'array', 
          of: [{ 
            type: 'object', 
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'value', title: 'Value', type: 'string' }
            ]
          }],
          initialValue: [
            { title: 'Linen Wash', value: 'linen-wash' },
            { title: 'Ironing Service', value: 'ironing' },
            { title: 'Wash & Ironing', value: 'both' }
          ]
        },
        { name: 'notesLabel', title: 'Notes Label', type: 'string', initialValue: 'Additional Notes' },
        { name: 'notesPlaceholder', title: 'Notes Placeholder', type: 'string', initialValue: 'Any special requests or details...' },
        { name: 'submitButtonText', title: 'Submit Button Text', type: 'string', initialValue: 'Confirm Appointment' },
        { name: 'submittingButtonText', title: 'Submitting Button Text', type: 'string', initialValue: 'Submitting...' },
        { name: 'errorMessage', title: 'Error Message', type: 'string', initialValue: 'Please fill in all required fields' },
      ]
    }),

    // Step 4: Confirmation
    defineField({
      name: 'confirmationStep',
      title: 'Confirmation Step',
      type: 'object',
      fields: [
        { name: 'title', title: 'Confirmation Title', type: 'string', initialValue: 'Appointment Confirmed!' },
        { name: 'message', title: 'Confirmation Message', type: 'text', initialValue: 'Thank you for choosing us. We will send a confirmation email to {email}.' },
        { name: 'detailsTitle', title: 'Details Title', type: 'string', initialValue: 'Appointment Details:' },
        { name: 'dateLabel', title: 'Date Label', type: 'string', initialValue: 'Date:' },
        { name: 'timeLabel', title: 'Time Label', type: 'string', initialValue: 'Time:' },
        { name: 'serviceLabel', title: 'Service Label', type: 'string', initialValue: 'Service:' },
        { name: 'addressLabel', title: 'Address Label', type: 'string', initialValue: 'Address:' },
        { name: 'newAppointmentButtonText', title: 'New Appointment Button Text', type: 'string', initialValue: 'Make Another Appointment' },
      ]
    }),
  ],
})