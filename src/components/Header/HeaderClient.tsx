'use client';

import Button from '../Button';
import HeaderLinks from './components/HeaderLinks';
import LogoTitle from './components/LogoTitle';
import ScrollShader from './components/ScrollShader';

export default function HeaderClient({ className }: { className?: string }) {
    return (
        <header className={`${className} fixed z-[9999] w-full`}>
            <ScrollShader />
            <div className="mx-auto mt-8 w-responsive">
                <div className="flex items-center justify-between gap-8 border-4 border-black bg-white px-8 py-4 text-black">
                    <div className="flex flex-shrink items-center">
                        <LogoTitle titleColor="text-grey" className="grow" />
                    </div>
                    <div className="flex items-center md:gap-4">
                        <HeaderLinks />
                        <div className="flex gap-4 md:flex-col md:justify-center lg:flex-row lg:items-center">
                            <Button colour="purple" href="/join">
                                Join Us
                            </Button>
                            <Button
                                colour="orange"
                                href="https://discord.gg/3ryMfNBHTE"
                                targetBlank
                            >
                                Discord
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative -right-[0.5rem] -top-[7.5rem] -z-10 h-[8rem] w-responsive border-4 border-black bg-white lg:-top-[6rem] lg:h-[6.5rem] md-lg:-top-[4.75rem] md-lg:h-[5.25rem]" />
            </div>
        </header>
    );
}
