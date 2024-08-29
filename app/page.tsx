// remove after abstraction
"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora";

export default function Home() {
    return (
        <AuroraBackground className="grid items-center justify-start min-h-screen antialiased overflow-hidden bg-grid-black/[0.2] dark:bg-grid-white/[0.2]">
            <motion.div
                initial={{ opacity: 0.0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                <div className="p-20 z-20">
                    <h1 className="text-black dark:text-white font-sans font-semibold text-7xl">
                        Primer Festival de Robòtica
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="text-black dark:text-white font-sans text-4xl mt-4"
                    >
                        Motivando al futuro.
                    </motion.h2>
                </div>
            </motion.div>

            <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </AuroraBackground>
    );
}
