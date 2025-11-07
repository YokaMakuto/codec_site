import Image from 'next/image';
import Link from 'next/link';

export default function LogoTitle({
    titleColor,
    className,
    onClick,
}: {
    titleColor: 'text-grey' | 'text-white';
    className?: string;
    onClick?: () => void;
}) {
    const hoverColourClass =
        titleColor === 'text-grey'
            ? 'group-hover:text-[#7b8faf] group-focus-visible:text-[#7b8faf]'
            : 'group-hover:text-[#ffffffcc] group-focus-visible:text-[#ffffffcc]';

    return (
        <Link
            href="/"
            className={`${className} group flex flex-row items-center transition-all duration-300 ease-out`}
            onClick={onClick}
        >
            <Image
                src="/images/logos/logo.png"
                alt="CODEC Logo"
                className="h-full w-[4.5rem] transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110 md:w-[3rem] lg:w-[3.75rem]"
                width={140}
                height={140}
            />
            <h1
                className={`${titleColor} ${hoverColourClass} ml-3 text-5xl font-bold transition-all duration-300 ease-out group-hover:scale-105 group-hover:font-black group-focus-visible:scale-105 group-focus-visible:font-black md:text-3xl lg:text-4xl`}
            >
                CODEC
            </h1>
        </Link>
    );
}
