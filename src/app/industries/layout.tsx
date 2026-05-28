import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industries We Serve | IPSOL Technologies',
    description: 'IPSOL Technologies delivers tailored Business Central ERP systems for Manufacturing, Distribution, Retail, Trading, and Professional Services.',
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
