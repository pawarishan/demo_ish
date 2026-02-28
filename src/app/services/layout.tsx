import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | IP Solutions | Business Central Consulting',
    description: 'Explore our comprehensive Microsoft Dynamics 365 Business Central services including implementation, AL development, integrations, and ongoing support.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
