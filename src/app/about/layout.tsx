import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About IPSOL Technologies | Microsoft Dynamics 365 Business Central Experts',
    description: 'Learn about IPSOL Technologies, our mission, and our expert approach to delivering world-class Microsoft Dynamics 365 Business Central ERP implementations.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
