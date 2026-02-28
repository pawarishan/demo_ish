import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Choose IP Solutions | Premium ERP Partner',
    description: 'Discover why top-tier enterprises choose IP Solutions for their Microsoft Dynamics 365 Business Central implementation, development, and support.',
};

export default function WhyChooseUsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
