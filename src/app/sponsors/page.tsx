import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Sponsors',
};

export default function SponsorsPage() {
    return (
        <main className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-8">
                <div className="hidden rounded-xl border-4 border-black bg-white p-4 md:block">
                    <Image src="/images/logos/logo.svg" alt="CODEC logo" width={120} height={120} />
                </div>
                <Title colour="yellow">Sponsors</Title>
                <div className="hidden rounded-xl border-4 border-black bg-white p-4 md:block">
                    <Image src="/images/logos/logo.svg" alt="CODEC logo" width={120} height={120} />
                </div>
            </div>
            <div className="max-w-3xl border-x-4 border-white p-2 text-center text-lg md:p-5 md:text-2xl">
                We&apos;re updating this page with our latest sponsors. Once partnerships are
                confirmed, you&apos;ll find all of the details here.
            </div>
            <Paragraph>
                If you&apos;d like to partner with us, please enquire at:{' '}
                <a href="mailto:codec@ensta.edu.dz" className="underline">
                    codec@ensta.edu.dz
                </a>
            </Paragraph>
        </main>
    );
}
