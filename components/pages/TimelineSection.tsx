import { cn } from "@/lib/utils";
import { Timeline } from "@/components/ui/timeline";

import type { classNameProp } from "@/lib";

export default function TimelineSection({ className }: classNameProp) {
    const data = [
        {
            title: "2024",
            content: <p>Hello</p>,
        },
        {
            title: "2024 again",
            content: <p>hello again :D</p>,
        },
        {
            title: "2024 again",
            content: <p>hello again :D</p>,
        },
        {
            title: "2024 again",
            content: <p>hello again :D</p>,
        },
        {
            title: "2024 again",
            content: <p>hello again :D</p>,
        },
        {
            title: "2024 again",
            content: <p>hello again :D</p>,
        },
        {
            title: "2024 again",
            content: <p>hello again :D</p>,
        },
    ];
    return (
        <section
            className={cn(
                "grid justify-center items-start min-w-full font-sans",
                className
            )}
            id="timeline-section"
        >
            <h2 className="text-4xl font-semibold mt-20">¿Qué es?</h2>
            <Timeline data={data} />
        </section>
    );
}
