'use client';

import Head from 'next/head';
import siteData from '../data/site-data';
import { Footer } from '@/components/FooterComp';
import { ScrollFadeIn } from '@/hooks/ScrollFadeIn';
import IRS from './irs/page';

// This is the main page component that renders all sections of the portfolio.
// Each section is a separate component for better organization and maintainability.

export default function Page() {
    return (
        <div className="min-h-screen text-gray-800 transition-colors duration-300">
            <Head>
                <title>{siteData.project.name} | Software Engineer</title>
                <meta name={siteData.project.name} content={siteData.project.name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section id="home">
                    <ScrollFadeIn>
                        <IRS />
                    </ScrollFadeIn>
                </section>
            </main>

            <div className="bottom-0 px-10 pb-2">
                <Footer />
            </div>
        </div>
    );
}
