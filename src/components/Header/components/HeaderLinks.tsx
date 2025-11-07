"use client";

import LINKS from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

export type HeaderDropdownLink = {
    title: string;
    href: string;
    target?: string;
    rel?: string;
};

export default function HeaderLinks({
    onClick,
    dropdownLinks,
}: {
    onClick?: () => void;
    dropdownLinks?: HeaderDropdownLink[];
}) {
    const pathname = usePathname();
    const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

    const handleEnter = (title: string) => () => setHoveredTitle(title);
    const handleLeave = () => setHoveredTitle(null);

    const isActiveLink = (href?: string) => {
        if (!href) return false;
        if (href === '/') return pathname === '/';
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
    <nav className="flex items-center gap-4 text-black">
            {LINKS.map((link, i) =>
                link.dropdown ? (
                    <DropdownMenu
                        key={i}
                        title={link.title}
                        items={link.dropdown
                            .filter((item) => typeof item.href === 'string')
                            .map((item) => ({
                                title: item.title,
                                href: item.href as string,
                            }))}
                        onClick={onClick}
                    />
                ) : (
                    <Link
                        href={link.href ?? '#'}
                        className={`py-2 font-semibold transition-all duration-200 ease-out ${(() => {
                            const isHovered = hoveredTitle === link.title;
                            const someoneHovered = hoveredTitle !== null;
                            const active = isActiveLink(link.href);
                            if (isHovered || active) {
                                return 'scale-110 text-lg font-black text-black';
                            }
                            if (someoneHovered) {
                                return 'scale-95 text-sm text-[#5b667b]';
                            }
                            return 'text-base text-black hover:text-[#1d2430] hover:scale-105';
                        })()}`}
                        onMouseEnter={handleEnter(link.title)}
                        onMouseLeave={handleLeave}
                        onFocus={handleEnter(link.title)}
                        onBlur={handleLeave}
                        onClick={onClick}
                        aria-current={isActiveLink(link.href) ? 'page' : undefined}
                        key={i}
                    >
                        {link.title}
                    </Link>
                )
            )}
            {dropdownLinks && dropdownLinks.length > 0 && (
                <DropdownMenu title="Member Links" items={dropdownLinks} onClick={onClick} />
            )}
        </nav>
    );
}
