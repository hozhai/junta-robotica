"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora";
import { BackgroundBeams } from "@/components/ui/background-beams";
import VideoComponent from "../ui/video-component";

export default function Hero({ className }: { className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            className={className}
        >
            <AuroraBackground className="grid justify-normal items-center bg-slate-200 dark:bg-neutral-800 text-center min-h-screen antialiased overflow-hidden z-20">
                <motion.div
                    initial={{ opacity: 0.0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <div className="grid place-items-center p-20 mb-6">
                        <h1 className="font-sans font-semibold text-7xl bg-clip-text text-transparent bg-gradient-to-tr dark:bg-gradient-to-bl from-slate-700 to-neutral-400 dark:from-zinc-50 dark:to-neutral-500">
                            Sé parte. Sé el futuro.
                        </h1>

                        <motion.h2
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="text-gray-500 dark:text-neutral-400 font-sans text-4xl mt-2 italic"
                        >
                            Primera Junta de Robótica 2025
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 1,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        ></motion.div>
                    </div>
                </motion.div>

                <BackgroundBeams
                    colors={[
                        "var(--neutral-800)",
                        "var(--sky-300)",
                        "var(--slate-300)",
                    ]}
                />

                <div className="z-0 absolute pointer-events-none inset-0 items-center justify-center dark:bg-black dark:block hidden [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </AuroraBackground>
        </motion.div>
    );
}
