import heroSection from './heroSection'
import servicesSection from './servicesSection'
import navbar from './navbar'
import footer from './footer'
import siteSettings from './siteSettings'
import booking from './booking'

export const schemaTypes = [
  heroSection,
  servicesSection,
  navbar,
  footer,
  siteSettings,
  booking
]

export const schema = {
  types: schemaTypes
}
