import { client } from '@/sanity/lib/client'
import { getBookingPage } from '@/sanity/lib/queries'
import BookingEditClientPage from './BookingEditClientPage'

export default async function BookingEditPage({
  params
}: {
  params: { id: string }
}) {
  const data = await getBookingPage()

  return <BookingEditClientPage data={data} bookingId={params.id} />
}
