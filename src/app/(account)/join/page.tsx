import Button from '@/components/Button';
import Paragraph from '@/components/Paragraph';
import type { Metadata } from 'next';

const DISCORD_INVITE = 'https://discord.gg/3ryMfNBHTE';

export const metadata: Metadata = {
    title: 'Join',
};

export default function JoinPage() {
    return (
        <section className="mx-auto flex w-responsive flex-col gap-12 pb-24 pt-12 text-grey">
            <header className="flex flex-col gap-4">
                <h1 className="text-4xl font-black text-black md:text-5xl">Join CODEC</h1>
                <Paragraph>
                    We&apos;re a friendly community of creatives, developers, and club members
                    building projects together throughout the year. No logins or paid memberships
                    needed—just drop in and say hi.
                </Paragraph>
            </header>

            <div className="grid gap-8 md:grid-cols-2">
                <article className="flex flex-col gap-4 rounded-3xl border-4 border-black bg-white p-8">
                    <h2 className="text-2xl font-black text-black">Hop Into Our Discord</h2>
                    <Paragraph>
                        Discord is where we share announcements, brainstorm ideas, and organise our
                        meetups. New to the club? Start by joining the server and introducing
                        yourself in #welcome. It&apos;s the fastest way to get involved.
                    </Paragraph>
                    <Button colour="orange" href={DISCORD_INVITE} targetBlank>
                        Join the Discord Server
                    </Button>
                </article>

                <article className="flex flex-col gap-4 rounded-3xl border-4 border-black bg-white p-8">
                    <h2 className="text-2xl font-black text-black">Come To An Event</h2>
                    <Paragraph>
                        We run weekly club nights, workshops, and special events during the
                        semester. Check out the events page for what&apos;s coming up, then swing
                        by—we love meeting new people and there&apos;s always someone happy to show
                        you around.
                    </Paragraph>
                    <Button colour="purple" href="/events">
                        See Upcoming Events
                    </Button>
                </article>
            </div>

            <article className="flex flex-col gap-4 rounded-3xl border-4 border-black bg-white p-8">
                <h2 className="text-2xl font-black text-black">Have Questions?</h2>
                <Paragraph>
                    Need more details or want to collaborate with us? Reach out via the contact page
                    and we&apos;ll get back to you soon. We&apos;re always keen to hear from
                    potential speakers, sponsors, and new members.
                </Paragraph>
                <Button colour="purple" href="/contact">
                    Contact The Team
                </Button>
            </article>
        </section>
    );
}
