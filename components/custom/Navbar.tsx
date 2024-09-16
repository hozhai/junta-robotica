"use client";

import { useEffect, useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TransitionLink from "./TransitionLink";

export function Navbar({ avatarImage, userName }: { avatarImage?: React.ReactNode, userName?: string | null | undefined }) {
    const [active, setActive] = useState<string | null>(null);

    const [navBg, setNavBg] = useState(false);

    const changeNavBg = () => {
        window.scrollY >= 800 ? setNavBg(true) : setNavBg(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavBg);
        return () => {
            window.removeEventListener("scroll", changeNavBg);
        };
    }, []);
    return (
        <div className="fixed font-geist-sans inset-x-0 max-w-2xl z-50">
            <Menu
                setActive={setActive}
                className={cn(
                    "flex h-20 transition-colors",
                    navBg ? "bg-white/[0.2] dark:bg-black" : "bg-white/[0.2] dark:bg-black/[0.3]"
                )}
            >
                <MenuItem
                    setActive={setActive}
                    active={active}
                    className="mr-20"
                    childClassName="text-md"
                    item="JUROB"
                    itemNode={(
                        <span onClick={() => window.scrollTo(0, 0)}>JUROB</span>
                    )}
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/about">About Us</HoveredLink>
                        <HoveredLink href="/contact">Contact Us</HoveredLink>
                        <HoveredLink href="/legal">Legal</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="TODO"
                    className="mr-10"
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">element one</HoveredLink>
                        <HoveredLink href="/individual">element two</HoveredLink>
                        <HoveredLink href="/team">element three</HoveredLink>
                        <HoveredLink href="/enterprise">element four</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="TODO2"
                    className="justify-self-end"
                >
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Vision"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Ser un impacto positivo en el mundo de la robotica."
                        />
                        <ProductItem
                            title="Mision"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Promover la tecnologia en la juventud."
                        />
                    </div>
                </MenuItem>

                {
                    !userName ?
                        <TransitionLink
                            href="/login"
                            className="ml-20"
                        >Sign In</TransitionLink>
                        :
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Thing"
                            itemNode={avatarImage}
                            className="ml-20"
                        >
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/hobby">element one</HoveredLink>
                                <HoveredLink href="/individual">element two</HoveredLink>
                                <HoveredLink href="/team">element three</HoveredLink>
                                <HoveredLink href="/enterprise">element four</HoveredLink>
                            </div>

                        </MenuItem>
                }
            </Menu>
        </div>
    );
}
