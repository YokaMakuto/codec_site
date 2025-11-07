'use client';

import LINKS from '@/constants/links';
import type { LinkType } from '@/constants/links';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IoChevronForward } from 'react-icons/io5';
import Button from '../Button';
import FancyRectangle from '../FancyRectangle';
import LogoTitle from './components/LogoTitle';
import MobileDropdownMenu from './components/MobileDropdownMenu';
import ScrollShader from './components/ScrollShader';

export default function HeaderMobileClient({ className }: { className?: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((open) => !open);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className={`${className} fixed z-[9999] w-full`}>
            <ScrollShader className={isMenuOpen ? 'hidden' : ''} />
            <div className="mx-auto mt-8 w-responsive">
                <div className="flex">
                    <LogoTitle titleColor="text-white" className="grow" onClick={closeMenu} />
                    <FancyRectangle colour="black" offset="4" filled>
                        <button
                            onClick={toggleMenu}
                            className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white text-4xl text-black transition-all duration-300"
                        >
                            <IoMdMenu aria-label="Menu" />
                        </button>
                    </FancyRectangle>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-[9998] bg-black/60 transition-all duration-300 ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
                onClick={closeMenu}
            >
                <div
                    className={`fixed bottom-0 left-0 z-[9999] flex max-h-[80vh] w-full transform flex-col border-t-4 border-black bg-white shadow-2xl transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    onClick={(event) => event.stopPropagation()}
                >
                    <nav className="flex flex-col gap-2 overflow-y-auto p-6 text-lg text-black">
                        {LINKS.map((link: LinkType, index: number) =>
                            link.dropdown ? (
                                <MobileDropdownMenu
                                    key={index}
                                    title={link.title}
                                    items={link.dropdown
                                        .filter((item) => typeof item.href === 'string')
                                        .map((item) => ({
                                            title: item.title,
                                            href: item.href as string,
                                        }))}
                                    onClick={closeMenu}
                                />
                            ) : (
                                typeof link.href === 'string' && (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="flex items-center justify-between px-4 py-1 font-bold hover:underline"
                                        onClick={closeMenu}
                                    >
                                        <span>{link.title}</span>
                                        <IoChevronForward size={20} className="text-black" />
                                    </Link>
                                )
                            )
                        )}
                        <div className="my-4 h-0.5 w-full bg-grey" />
                        <div className="flex w-full flex-col gap-4 px-4">
                            <Button
                                colour="orange"
                                size="small"
                                className="px-[3rem] py-2"
                                href="/join"
                                onClick={closeMenu}
                            >
                                Join Us
                            </Button>
                            <Button
                                colour="purple"
                                size="small"
                                className="px-[3rem] py-2"
                                href="https://discord.gg/3ryMfNBHTE"
                                targetBlank
                                onClick={closeMenu}
                            >
                                Discord
                            </Button>
                            <Button
                                colour="purple"
                                size="small"
                                className="px-[3rem] py-2"
                                onClick={closeMenu}
                            >
                                Close
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
