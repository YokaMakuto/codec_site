import * as React from 'react';

interface Props {
    href: string;
    alt: string;
    lightSrc?: string;
    darkSrc?: string;
    ariaLabel?: string;
}

export default function SocialIcon({ href, alt, lightSrc, ariaLabel }: Props) {
    const src = lightSrc;
    return (
        <td style={{ padding: 6 }}>
            <a href={href} aria-label={ariaLabel ?? alt}>
                {src ? (
                    // In real template, dark/light variants are swapped via CSS; placeholder uses one.
                    <img src={src} alt={alt} width={24} height={24} />
                ) : (
                    <span>{alt}</span>
                )}
            </a>
        </td>
    );
}
