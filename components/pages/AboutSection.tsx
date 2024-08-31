import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import type { classNameProp } from "@/lib/index";
import { Pen, Smile, Target, Trophy } from "lucide-react";

export default function AboutSection({ className }: classNameProp) {
    const items = [
        {
            title: "Se trata de aprender.",
            description:
                "No importa que nunca hayas tocado nada acerca de robótica, no importa que seas un genio de la robótica; importa aún menos que estés entre medio - todos estamos contigo.",
            header: (
                <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
            ),

            icon: <Pen className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Se trata de colaborar.",
            description:
                'Sin equipo o con equipo, todos trabajaremos juntos, y no porque es la norma, sino porque es lo correcto. "El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos. (Michael Jordan)"',
            header: (
                <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
            ),

            icon: <Target className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Se trata de divertirse.",
            description:
                "Understand the impact of effective communication in our lives.",
            header: (
                <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
            ),

            icon: <Smile className="h-4 w-4 text-neutral-500" />,
        },

        {
            title: "Se trata de triunfar.",
            description:
                "Discover the beauty of thoughtful and functional design.",
            header: (
                <Skeleton className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
            ),

            icon: <Trophy className="h-4 w-4 text-neutral-500" />,
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
            <BentoGrid className="max-w-screen-lg mx-auto mt-20">
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
            {/* god forgive me for what im about to fucking do */}
            <div className="opacity-0 lg:opacity-100 perspective-250 transform-style-3d absolute top-1/2 -translate-y-1/2 left-[1.1rem] h-[42.1rem] w-[20rem]">
                <div className="shadow-[inset_-20px_0px_20px_40px_hsl(var(--background))] bg-grid-white/[0.2] w-full h-full translate-z-2 rotate-y-[25deg] scale3d-[1_1_2]"></div>
            </div>
            <div className="rotate-z-180 opacity-0 lg:opacity-100 perspective-250 transform-style-3d absolute top-1/2 -translate-y-1/2 right-[1.1rem] h-[42.1rem] w-[20rem]">
                <div className="bg-grid-white/[0.2] w-full h-full translate-z-2 rotate-y-[25deg] scale3d-[1_1_2]"></div>
            </div>
        </section>
    );
}
