export interface TechStack {
    tech_name: string;
    color: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    githubLink: string;
    websiteLink?: string;
    techStacks: TechStack[];
    active: boolean;
}
export const PROJECTS: Project[] = [
    {
        title: 'Club Website Refresh',
        description:
            'The CODEC website you are browsing right now! Built as a modern, accessible Next.js application with a focus on performance and maintainability.',
        image: '/images/opensource/opensource.png',
        githubLink: 'https://github.com',
        websiteLink: 'https://codec.club',
        techStacks: [
            { tech_name: 'Next.js', color: '#000000' },
            { tech_name: 'TypeScript', color: '#2D79C7' },
            { tech_name: 'Tailwind CSS', color: '#38BDF8' },
        ],
        active: true,
    },
    {
        title: 'Event Toolkit',
        description:
            'A collection of reusable components and workflows that make running club events easier, from sign-up forms to automated reminder emails.',
        image: '/images/home/meet-and-greet-2025-1.webp',
        githubLink: 'https://github.com',
        websiteLink: undefined,
        techStacks: [
            { tech_name: 'Node.js', color: '#6DA55F' },
            { tech_name: 'PostgreSQL', color: '#336791' },
        ],
        active: false,
    },
];

export const getProjects = (): Project[] => PROJECTS;
