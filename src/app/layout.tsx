import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Notification from '@/components/Notification';
import { env } from '@/env.mjs';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import Script from 'next/script';

export const metadata: Metadata = {
    icons: {
        icon: '/images/logos/logo.png',
    },
    title: {
        template: '%s | CODEC',
        default: 'CODEC',
    },
    description:
        'CODEC is a student-run organization for those with an interest in computer science or computing in general.',
};

// TODO: Add canonical URLs
// TODO: Sitemap
// TODO: Meta tags

export const viewport: Viewport = {
    themeColor: '#252020',
};

const archivo = Archivo({
    variable: '--font-archivo',
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={archivo.className}>
            <Script
                defer
                src="https://umami.codec.org.au/script.js"
                data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            />
            <body id="root" className="overflow-x-hidden bg-grey text-white">
                <Notification />
                <Header />
                <div className="mx-auto min-h-screen w-responsive pb-6 pt-32 md:pt-40">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
