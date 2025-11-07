// Static events - no CMS needed!

type Month =
    | 'JAN'
    | 'FEB'
    | 'MAR'
    | 'APR'
    | 'MAY'
    | 'JUN'
    | 'JUL'
    | 'AUG'
    | 'SEP'
    | 'OCT'
    | 'NOV'
    | 'DEC';

export type Event = {
    title: string;
    date: { year: number; month: Month; day: number; timestamp: Date };
    time: string;
    location: string;
    details: string;
    url?: { href: URL; text?: string };
    image: string;
};

// Static events data
const STATIC_EVENTS: Event[] = [
    {
        title: 'CODEC Open Day',
        date: {
            year: 2025,
            month: 'OCT',
            day: 27,
            timestamp: new Date('2025-10-27'),
        },
        time: 'All Day',
        location: 'Preparatory Cycle Department Hall - ENSTA, DERGANA',
        details: `Get ready to dive into a mix of mind-blowing AI and Cyber Security projects 🤖🛡️, plus a lineup of fun activities you don't wanna miss:

🎮 PvP Gaming Zone - Tekken, FIFA, Blur & more!
🧠 Comp Sci Quiz
🎨 "Draw Your Face" Board
💀 Kali Linux Treasure Hunt Mayhem! 🕵️‍♂️

Swing by to meet our awesome club members, discover what we're all about, and have fun forgetting that school stress for a bit ✨`,
        image: '/images/events/2025/codec-open-day.png',
    },
];

export async function fetchEvents(): Promise<Event[]> {
    // Return static event - no database/API needed!
    return STATIC_EVENTS;
}
