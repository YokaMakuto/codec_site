export const SPONSOR_TYPES = ['gold', 'silver', 'bronze'] as const;

export type SponsorType = (typeof SPONSOR_TYPES)[number];
export type Sponsor = {
    name: string;
    description: string;
    image: string;
    website: string;
    type: SponsorType;
};

export const SPONSORS: Sponsor[] = [
    {
        name: 'Optiver',
        description:
            'A leading global market maker that provides liquidity on multiple exchanges around the world.',
        image: '/images/sponsors/optiver.png',
        website: 'https://optiver.com',
        type: 'gold',
    },
    {
        name: 'CODEC Alumni',
        description: 'Graduates supporting current students with mentorship and scholarships.',
        image: '/images/logos/logo.svg',
        website: 'https://github.com',
        type: 'silver',
    },
    {
        name: 'Local Tech Community',
        description: 'Community partners who help us run events throughout the year.',
        image: '/images/logos/logo.svg',
        website: 'https://github.com',
        type: 'bronze',
    },
];

export const getSponsors = (): Sponsor[] => SPONSORS;

// Changed to get year every load, !!! Must keep companies up to date !!!
const d = new Date();
export const YEAR = d.getFullYear();
