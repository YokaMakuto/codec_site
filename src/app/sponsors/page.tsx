import Sponsors from '@/app/sponsors/Sponsors';
import Image from 'next/image';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import type { Sponsor } from '@/data/sponsors';
import { YEAR, fetchSponsors } from '@/data/sponsors';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sponsors',
};

export default async function SponsorsPage() {
    // Get sponsors from payload
    const sponsors: Sponsor[] = await fetchSponsors();

    return (
        <main className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-8">
                <div className="hidden md:block rounded-xl border-4 border-black bg-white p-4">
                    <Image
                        src="/images/logos/logo.svg"
                        alt="CODEC logo"
                        width={120}
                        height={120}
                    />
                </div>
                <Title colour="yellow">{`${YEAR} Sponsors`}</Title>
                <div className="hidden md:block rounded-xl border-4 border-black bg-white p-4">
                    <Image
                        src="/images/logos/logo.svg"
                        alt="CODEC logo"
                        width={120}
                        height={120}
                    />
                </div>
            </div>
            <div className="max-w-3xl border-x-4 border-white p-2 text-center text-lg md:p-5 md:text-2xl">
                <b>CODEC</b> is proudly supported by our <b>generous sponsors</b>. Their unwavering
                support make events and workshops possible, fostering an environment for aspiring
                tech enthusiasts to excel within our community.
            </div>
            <Sponsors sponsors={sponsors} />
            <Paragraph>
                If you&apos;d like to partner with us, please enquire at:{' '}
                <a href="mailto:codec@ensta.edu.dz" className="underline">
                    codec@ensta.edu.dz
                </a>
            </Paragraph>
        </main>
    );
}
