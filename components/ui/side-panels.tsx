"use client";

import type { classNameProp } from "@/lib";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SidePanels({ className }: classNameProp) {
    return (
        <>
            <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                className={cn(
                    "opacity-0 lg:opacity-100 perspective-250 transform-style-3d absolute top-1/2 -translate-y-1/2 left-[1.1rem] h-[42.1rem] w-[20rem]",
                    className
                )}
            >
                <div className="shadow-[inset_-20px_0px_80px_60px_hsl(var(--background))] dark:bg-grid-white/[0.5] w-full h-full translate-z-2 rotate-y-[35deg] scale3d-[1_1_2]"></div>
            </motion.div>

            <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                className={cn(
                    "rotate-z-180 opacity-0 lg:opacity-100 perspective-250 transform-style-3d absolute top-1/2 -translate-y-1/2 right-[1.1rem] h-[42.1rem] w-[20rem]",
                    className
                )}
            >
                <div className="shadow-[inset_-20px_0px_80px_60px_hsl(var(--background))] dark:bg-grid-white/[0.5] w-full h-full translate-z-2 rotate-y-[35deg] scale3d-[1_1_2]"></div>
            </motion.div>
        </>
    );
}
