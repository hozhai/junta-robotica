"use client";

import Link from "next/link";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import type { classNameProp } from "@/lib";
import { Mouse, UserRoundPlus } from "lucide-react";

export default function HeroSection({ className }: classNameProp) {
    return (
        <section
            className={className}
            id="hero-section"
        >
            <AuroraBackground className="grid justify-normal items-center bg-slate-200 dark:bg-off-black text-center min-h-screen antialiased overflow-hidden z-20">
                <HeroHighlight containerClassName="bg-transparent dark:bg-transparent min-h-screen ">
                    <div className="grid place-items-center p-20 mb-6">
                        <h1 className="pointer-events-none font-geist-sans font-semibold text-7xl bg-clip-text text-transparent bg-gradient-to-tr dark:bg-gradient-to-bl from-slate-700 to-neutral-400 dark:from-zinc-50 dark:to-slate-500">
                            Sé parte. Sé el futuro.
                        </h1>

                        {/* invisible duplicate for accessibility features */}
                        <h1 className="absolute font-geist-sans font-semibold text-7xl top-20 opacity-1 cursor-text text-transparent">
                            Sé parte. Sé el futuro.
                        </h1>
                        <motion.h2
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="text-gray-500 dark:text-neutral-400 text-2xl mt-2 font-inter italic"
                        >
                            Sé parte de la primera junta de robótica.
                        </motion.h2>
                        <div className="mt-6 flex justify-between items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                            >
                                {/* fixme: switch href to actual login page and make target _self */}
                                <Link
                                    href="https://example.org"
                                    target="_blank"
                                >
                                    <button className="font-inter text-md inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-[#1F1F1F] bg-[linear-gradient(110deg,#000103,45%,#6A6A6A,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:brightness-[1.2] hover:shadow-2xl hover:border-white hover:border-2 w-40">
                                        <span className="py-1 px-6 font-medium inline-flex h-full cursor-pointer items-center justify-center text-white">
                                            <UserRoundPlus size={20} />
                                            &nbsp;&nbsp;Registrar
                                        </span>
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </HeroHighlight>

                <motion.div
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white w-7 h-7 z-20"
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: -40,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 0.8],
                        y: [-40, -20, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 0.5,
                        duration: 1.5,
                        ease: "linear",
                    }}
                >
                    <Mouse className="w-9 h-9" />
                </motion.div>
            </AuroraBackground>
        </section >
    );
}
