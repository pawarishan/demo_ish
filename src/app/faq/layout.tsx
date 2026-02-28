import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | IP Solutions',
    description: 'Find answers to common questions about Microsoft Dynamics 365 Business Central implementations, customizations, and upgrades.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
