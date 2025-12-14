import { getContactPage } from '@/sanity/lib/queries';
import ContactClientPage from './ContactClientPage';

export default async function ContactPage() {
    const data = await getContactPage();

    return <ContactClientPage data={data} />;
}