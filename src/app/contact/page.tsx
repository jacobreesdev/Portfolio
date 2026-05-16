import type { Metadata } from 'next';

import ContactContent from './contact-content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jacob Rees — Frontend Engineer based in Durham, working remote or hybrid.',
};

export default function ContactPage() {
  return <ContactContent />;
}
