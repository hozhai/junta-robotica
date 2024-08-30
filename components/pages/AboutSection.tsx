import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import type { classNameProp } from "@/lib/index";

export default function AboutSection({ className }: classNameProp) {
    const items = [
        {
            title: "Se trata de aprender.",
            description:
                "No importa que nunca hayas tocado nada acerca de robótica, no importa que seas un genio de la robótica; importa aún menos que estés entre medio - todos tenemos algo por aprender.",
            header: (
                <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
            ),

            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Se trata de colaborar.",
            description: "Dive into the transformative power of technology.",
            header: (
                <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
            ),

            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Se trata de triunfar.",
            description:
                "Discover the beauty of thoughtful and functional design.",
            header: (
                <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
            ),

            icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Se trata de divertir.",
            description:
                "Understand the impact of effective communication in our lives.",
            header: (
                <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
            ),

            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
    ];
    return (
        <section
            className={cn("h-[100vh] pt-36 relative", className)}
            id="about-section"
        >
            <h2 className="text-center text-6xl font-semibold">
                ¿De qué se trata?
            </h2>
            <BentoGrid className="max-w-screen-lg mx-auto mt-24">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 1 || i === 2 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>

            <div className="bg-sky-200 dark:bg-neutral-600/[0.3] h-64 w-32 absolute top-[50%] left-0 "></div>
        </section>
    );
}
