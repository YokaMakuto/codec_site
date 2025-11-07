import FancyRectangle from '@/components/FancyRectangle';
import Paragraph from '@/components/Paragraph';
import Image from 'next/image';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { IoTriangleSharp } from 'react-icons/io5';

function Info({ className }: { className?: string }) {
    return (
        <div className={`${className} space-y-6`}>
            <h2 className="text-4xl font-bold">
                <span className="bg-orange p-1 text-grey">Friday Night</span>
            </h2>
            <div>
                <div className="grid grid-cols-[auto_minmax(0,_1fr)_auto] gap-x-8 gap-y-3">
                    <div className="col-span-3 ml-auto h-1 w-[calc(100%-1rem)] bg-white" />
                    <IoTriangleSharp size={26} className="rotate-90 fill-yellow" />
                    <div>
                        <b>Date:</b> Every Friday
                    </div>
                    <FiCalendar size={24} />
                    <div className="col-span-3 ml-auto h-1 w-[calc(100%-1rem)] bg-white" />
                    <IoTriangleSharp size={26} className="rotate-90 fill-purple" />
                    <div>
                        <b>Time:</b> From 5:00pm onwards
                    </div>
                    <FiClock size={24} />
                    <div className="col-span-3 ml-auto h-1 w-[calc(100%-1rem)] bg-white" />
                    <IoTriangleSharp size={26} className="rotate-90 fill-orange" />
                    <div>
                        <b>Venue:</b> Discord
                    </div>
                    <FiMapPin size={24} />
                    <div className="col-span-3 ml-auto h-1 w-[calc(100%-1rem)] bg-white" />
                </div>
            </div>
        </div>
    );
}

function Logos() {
    return (
        <div className="hidden grid-cols-2 gap-5 md:grid">
            <Image src="/images/logos/logo.svg" alt="CODEC" width={140} height={140} />
            <Image src="/images/logos/logo.svg" alt="CODEC" width={140} height={140} />
            <Image src="/images/logos/logo.svg" alt="CODEC" width={140} height={140} />
            <Image src="/images/logos/logo.svg" alt="CODEC" width={140} height={140} />
        </div>
    );
}

function Details() {
    return (
        <FancyRectangle colour="white" offset="16" filled rounded>
            <Paragraph className="space-y-8">
                <ul className="ml-6 list-disc">
                    <li>Need to blow off some steam from a long week of studying?</li>
                    <li>Wanna hang out with like-minded students?</li>
                    <li>
                        Want to beat the final boss on Super Smash Bros? Or do you just want some
                        free food every now and then?
                    </li>
                </ul>
                <p>
                    Come down to Our <span className="font-bold text-yellow">Discord Server</span>{' '}
                    for some games!
                </p>
                <p className="font-bold"></p>
            </Paragraph>
        </FancyRectangle>
    );
}

export default function FridayNight({ className }: { className?: string }) {
    return (
        <section className={`${className} space-y-6 md:space-y-10`}>
            <div className="flex gap-4">
                <Info className="grow" />
                <Logos />
            </div>
            <div className="mb-4 mr-4">
                <Details />
            </div>
        </section>
    );
}
