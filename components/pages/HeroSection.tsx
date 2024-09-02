"use client";

import Link from "next/link";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import type { classNameProp } from "@/lib";
import { CircleChevronRight, Info, UserRoundPlus } from "lucide-react";

export default function HeroSection({ className }: classNameProp) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            className={className}
            id="hero-section"
        >
            {/* <AuroraBackground className="grid justify-normal items-center bg-slate-200 dark:bg-neutral-950 bg-grid-slate-400 dark:bg-grid-neutral-800 text-center min-h-screen antialiased overflow-hidden z-20">*/}

            <AuroraBackground className="grid justify-normal items-center bg-slate-200 dark:bg-neutral-950 text-center min-h-screen antialiased overflow-hidden z-20">
                <HeroHighlight containerClassName="bg-transparent dark:bg-transparent min-h-screen ">
                    <motion.div
                        initial={{ opacity: 0, y: -80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
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
                                    delay: 0.5,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="text-gray-500 dark:text-neutral-400 text-2xl mt-2 font-inter italic"
                            >
                                &quot;primera junta de robótica 2025&quot;
                            </motion.h2>
                            <div className="mt-6 flex justify-between items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.7,
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Link
                                        href="https://example.org"
                                        target="_blank"
                                    >
                                        <button className="font-inter relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50 hover:shadow-2xl hover:brightness-[2] transition-all">
                                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1F1F1F_0%,#3A3A3A_50%,#FFFFFF_100%)]" />
                                            <span className="px-6 text-md inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#000103] py-1 font-medium text-white backdrop-blur-3xl">
                                                <Info size={20} />
                                                &nbsp;&nbsp;Aprender Más
                                            </span>
                                        </button>
                                    </Link>
                                </motion.div>
                                <div className="w-6 h-0"></div>
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
                    </motion.div>
                </HeroHighlight>

                <div className="z-0 absolute pointer-events-none inset-0 items-center justify-center dark:bg-black dark:block hidden [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </AuroraBackground>
        </motion.section>
    );
}
