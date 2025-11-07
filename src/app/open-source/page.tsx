import Button from '@/components/Button';
import Duck from '@/components/Duck';
import FancyRectangle from '@/components/FancyRectangle';
import Title from '@/components/Title';
import { fetchProjectsData } from '@/data/projects';
import type { Metadata } from 'next';
import Image from 'next/image';
import FutureProjectCard from './FutureProjectCard';
import ProjectCard from './ProjectCard';

export const metadata: Metadata = {
    title: 'Open Source',
};

export default async function OpenSourcePage() {
    const projects = await fetchProjectsData();

    // Split projects into active and inactive
    const currentProjects = (projects ?? []).filter((project) => project.active);
    const futureProjects = (projects ?? []).filter((project) => !project.active);

    return (
        <main className="relative">
            <div className="h-full">
                <div className="mb-8 flex justify-center">
                    <Title colour="purple">Open Source</Title>
                </div>
                <div className="container mx-auto px-4">
                    <section className="mb-8">
                        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
                            <div className="relative z-10 flex flex-1 flex-col space-y-6">
                                <div className="max-w-[600px] xl:w-[500px]">
                                    <div className="relative flex flex-row justify-end space-x-4 *:h-16">
                                        <Duck colour="white" outline size={64} />
                                        <Duck colour="white" outline size={64} />
                                        <Duck colour="white" size={64} />
                                        <Duck colour="white" size={64} />
                                        <Duck colour="white" size={64} />
                                    </div>
                                    <div className="relative flex flex-row">
                                        <div className="w-12 bg-orange" />
                                        <div className="relative flex flex-1 flex-col">
                                            <span className="relative z-[2] bg-white py-4 pl-4 pr-16 text-2xl font-black text-black lg:pr-36 lg:text-3xl">
                                                Who is the
                                            </span>
                                            <span className="relative z-[2] whitespace-nowrap border-2 border-white py-6 pl-4 pr-16 text-2xl font-bold underline lg:pr-36 lg:text-3xl">
                                                Open Source Team?
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[600px] rounded-xl border-2 border-white px-4 py-6 md:px-6 md:py-6 xl:w-[500px]">
                                    <p className="text-lg md:text-xl">
                                        The{' '}
                                        <span className="font-bold text-yellow">
                                            CODEC Open Source Team
                                        </span>{' '}
                                        is a place for creative and inventive students who want to
                                        build innovative open-source software together. We are a new
                                        team currently working on a few projects, but we have many
                                        more exciting projects planned for the future!
                                    </p>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <Image
                                        src="/images/yellow-triangle.svg"
                                        alt="Yellow Triangle"
                                        width={40}
                                        height={40}
                                    />
                                    <Button
                                        colour="orange"
                                        href="https://forms.gle/e6PpAcS9ZrMfHwo16"
                                    >
                                        Join the Open Source Team!
                                    </Button>
                                </div>
                            </div>
                            <div className="relative z-0 w-full xl:mt-8">
                                <FancyRectangle colour={'white'} offset={'20'} filled rounded>
                                    <Image
                                        src="/images/opensource/opensource.png"
                                        alt="Open source"
                                        width={500}
                                        height={500}
                                        className="rounded-xl border-2 border-white bg-grey md:w-full"
                                    ></Image>
                                </FancyRectangle>
                            </div>
                        </div>
                    </section>
                    <section className="mb-12 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/yellow-star.svg"
                                alt="Yellow Star"
                                width={36}
                                height={36}
                                className="hidden md:block"
                            />
                            <h2 className="text-3xl font-black uppercase tracking-wide text-white">
                                Our Projects
                            </h2>
                        </div>
                        <FancyRectangle colour={'yellow'} offset={'12'} filled fullWidth rounded>
                            <div className="w-full border-4 border-black bg-white px-6 py-8">
                                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                                    {currentProjects.map((project, i) => (
                                        <ProjectCard key={i} project={project} />
                                    ))}
                                    {currentProjects.length === 0 && (
                                        <p className="text-lg font-semibold text-grey">
                                            Stay tuned—new open source builds are on the way!
                                        </p>
                                    )}
                                </div>
                            </div>
                        </FancyRectangle>
                    </section>
                    <section className="mb-12 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/white-star.svg"
                                alt="White Star"
                                width={36}
                                height={36}
                                className="hidden md:block"
                            />
                            <h2 className="text-3xl font-black uppercase tracking-wide text-white">
                                Future Projects
                            </h2>
                        </div>
                        <FancyRectangle colour={'orange'} offset={'12'} filled fullWidth rounded>
                            <div className="w-full border-4 border-black bg-white px-6 py-8">
                                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                                    {futureProjects.map((project, i) => (
                                        <FutureProjectCard key={i} project={project} />
                                    ))}
                                    {futureProjects.length === 0 && (
                                        <p className="text-lg font-semibold text-grey">
                                            Looking for ideas—come suggest the next big project!
                                        </p>
                                    )}
                                </div>
                            </div>
                        </FancyRectangle>
                    </section>
                    <section className="mb-12 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/yellow-triangle.svg"
                                alt="Yellow Triangle"
                                width={32}
                                height={32}
                            />
                            <h2 className="text-3xl font-black text-white">How to Join?</h2>
                        </div>
                        <FancyRectangle colour={'purple'} offset={'12'} filled fullWidth rounded>
                            <div className="w-full border-4 border-black bg-white px-6 py-8 text-lg text-grey md:text-xl">
                                Looking to join an active and welcoming student developer community?
                                We&apos;re always on the lookout for enthusiastic and creative
                                students to join us, learn, and contribute to making useful
                                open-source projects. Fill in{' '}
                                <a
                                    href="https://forms.gle/e6PpAcS9ZrMfHwo16"
                                    className="font-bold underline"
                                >
                                    this quick form
                                </a>{' '}
                                and we&apos;ll be in touch with next steps.
                            </div>
                        </FancyRectangle>
                    </section>
                    <section className="mb-12 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/white-star.svg"
                                alt="White Star"
                                width={32}
                                height={32}
                            />
                            <h2 className="text-3xl font-black text-white">
                                Contributing Guidelines & Code of Conduct
                            </h2>
                        </div>
                        <FancyRectangle colour={'yellow'} offset={'12'} filled fullWidth rounded>
                            <div className="w-full border-4 border-black bg-white px-6 py-8 text-lg text-grey md:text-xl">
                                We follow the{' '}
                                <a
                                    href="https://github.com"
                                    className="font-bold underline"
                                >
                                    CODEC Contributing Guidelines
                                </a>{' '}
                                and{' '}
                                <a
                                    href="https://github.com"
                                    className="font-bold underline"
                                >
                                    Code of Conduct
                                </a>{' '}
                                to keep collaboration respectful, inclusive, and fun.
                            </div>
                        </FancyRectangle>
                    </section>
                    <section className="mb-12 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/white-star-outline.svg"
                                alt="Outlined Star"
                                width={36}
                                height={36}
                            />
                            <h2 className="text-3xl font-black text-white">Contact Us</h2>
                        </div>
                        <FancyRectangle colour={'orange'} offset={'12'} filled fullWidth rounded>
                            <div className="w-full border-4 border-black bg-white px-6 py-8 text-lg text-grey md:text-xl">
                                <p>
                                    Open Source & Infrastructure Manager:{' '}
                                    <a
                                        href="https://github.com/yokamakuto"
                                        className="font-bold underline"
                                    >
                                        BOUKHENNOUFA ASSIL ABDERREZAK
                                    </a>
                                </p>
                                <p className="mt-2">
                                    Open Source Officers:{' '}
                                    <a
                                        href="https://github.com"
                                        className="font-bold underline"
                                    >
                                        Someone1
                                    </a>{' '}
                                    &amp;{' '}
                                    <a
                                        href="https://github.com"
                                        className="font-bold underline"
                                    >
                                        Someone2
                                    </a>
                                </p>
                                <p className="mt-4">
                                    Questions or ideas? Email us at{' '}
                                    <a className="font-bold underline" href="mailto:codec@ensta.edu.dz">
                                        codec@ensta.edu.dz
                                    </a>
                                    .
                                </p>
                            </div>
                        </FancyRectangle>
                    </section>
                </div>
            </div>
        </main>
    );
}
