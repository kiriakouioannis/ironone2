import { getBookingPage } from "@/sanity/lib/queries";
import BookingClientPage from "./BookingClientPage";

export default async function BookingPage() {
  const data = await getBookingPage();

  return <BookingClientPage data={data} />;
}
