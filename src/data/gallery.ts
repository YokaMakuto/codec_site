export type Gallery = {
    eventName: string;
    eventDate: { year: number; month: number; day: number };
    images: {
        url: string;
        width: number;
        height: number;
    }[];
};

export const GALLERIES: Gallery[] = [
    {
        eventName: 'CODEC Open Day 2025',
        eventDate: { year: 2025, month: 10, day: 27 },
        images: [
            {
                url: '/images/events/2025/codec-open-day.png',
                width: 1600,
                height: 900,
            },
            {
                url: '/images/home/industry-night-2025.webp',
                width: 1600,
                height: 900,
            },
            {
                url: '/images/home/meet-and-greet-2025-1.webp',
                width: 1600,
                height: 900,
            },
        ],
    },
    {
        eventName: 'Meet & Greet',
        eventDate: { year: 2025, month: 3, day: 12 },
        images: [
            {
                url: '/images/home/meet-and-greet-2025-2.webp',
                width: 1600,
                height: 900,
            },
            {
                url: '/images/home/cocktail-night-2024.webp',
                width: 1600,
                height: 900,
            },
        ],
    },
];

export const getGalleries = (): Gallery[] => GALLERIES;
