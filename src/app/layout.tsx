import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata: Metadata = {
    title: 'IP Solutions | Premium Dynamics 365 Business Central Experts',
    description: 'IP Solutions helps businesses implement, customize, integrate, migrate, and support Microsoft Dynamics 365 Business Central with scalable ERP solutions.',
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
                </ThemeProvider>
            </body>
        </html>
    );
}
