import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industries We Serve | IP Solutions',
    description: 'IP Solutions delivers tailored Business Central ERP systems for Manufacturing, Distribution, Retail, Trading, and Professional Services.',
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
