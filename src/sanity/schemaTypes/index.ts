import heroSection from './heroSection'
import navbar from './navbar'
import footer from './footer'
import siteSettings from './siteSettings'
import bookingform from './bookingform'
import bookingPage from './booking'
import servicesPage from './servicesPage'
import aboutPage from './aboutPage'
import contactPage from './contactPage'
import { availabilityType } from './availability'
import { businessHoursType } from './businessHours'
import { appointmentSlotsType } from './appointmentSlots'

export const schemaTypes = [
  // Site Content
  heroSection,
  navbar,
  footer,
  siteSettings,

  // Pages
  bookingPage,
  servicesPage,
  aboutPage,
  contactPage,

  // Booking Management
  bookingform,
  availabilityType,
  businessHoursType,
  appointmentSlotsType,
]

export const schema = {
  types: schemaTypes,
}
