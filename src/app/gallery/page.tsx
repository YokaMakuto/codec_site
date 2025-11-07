'use client';

import Title from '@/components/Title';
import { useState } from 'react';
import Gallery from './Gallery';

export default function GalleryPage() {
    const [currentTitle, setCurrentTitle] = useState('Photo Gallery');

    return (
        <main className="flex flex-col items-center gap-8 md:gap-16">
            <div className="flex justify-center">
                <Title colour="purple">{currentTitle}</Title>
            </div>
            <section className="w-full">
                <Gallery setCurrentTitle={setCurrentTitle} />
            </section>
        </main>
    );
}
