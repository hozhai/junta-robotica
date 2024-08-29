import { cn } from "@/lib/utils";
import { Timeline } from "@/components/ui/timeline";

export default function DateTime({ className }: { className?: string }) {
    const data = [
        {
            title: "2024",
            content: <p>Hello</p>,
        },
        {
            title: "2024 again",
            content: <p>hello again :D</p>,
        },
    ];
    return (
        <section
            className={cn(
                "h-[100vh] grid justify-center items-start min-w-full font-sans",
                className
            )}
        >
            <h2 className="text-4xl font-semibold mt-20">¿Qué es?</h2>
            <Timeline data={data} />
        </section>
    );
}
