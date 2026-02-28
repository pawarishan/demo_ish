import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About IP Solutions | Microsoft Dynamics 365 Business Central Experts',
    description: 'Learn about IP Solutions, our mission, and our expert approach to delivering world-class Microsoft Dynamics 365 Business Central ERP implementations.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
