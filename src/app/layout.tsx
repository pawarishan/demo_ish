import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata: Metadata = {
    title: 'IPSOL Technologies | Your Trusted Partner for Microsoft Licenses & Business Central Solutions',
    description: 'IPSOL Technologies helps businesses buy the right Microsoft licenses and implement Microsoft Dynamics 365 Business Central with clean, scalable, and business-focused solutions.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <ThemeProvider>
                    <Navbar />
                    <main style={{ minHeight: 'calc(100vh - 400px)', paddingTop: '80px' }}>
                        {children}
                    </main>
                    <Footer />
                    <FloatingWhatsApp />
                </ThemeProvider>
            </body>
        </html>
    );
}
