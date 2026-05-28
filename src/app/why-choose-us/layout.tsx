import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Choose IPSOL Technologies | Premium ERP Partner',
    description: 'Discover why top-tier enterprises choose IPSOL Technologies for their Microsoft Dynamics 365 Business Central implementation, development, and support.',
};

export default function WhyChooseUsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
