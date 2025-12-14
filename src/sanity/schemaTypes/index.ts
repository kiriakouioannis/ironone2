import heroSection from './heroSection'
import navbar from './navbar'
import footer from './footer'
import siteSettings from './siteSettings'
import bookingform from './bookingform'
import bookingPage from './booking'
import servicesPage from './servicesPage'
import aboutPage from './aboutPage'
import contactPage from './contactPage'

export const schemaTypes = [
  heroSection,
  navbar,
  footer,
  siteSettings,
  bookingform,
  bookingPage,
  servicesPage,
  aboutPage,
  contactPage,
]

export const schema = {
  types: schemaTypes,
}
