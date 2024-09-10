"use client";

import { useEffect, useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
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
        <div className={cn("fixed font-geist-sans inset-x-0 max-w-2xl z-50")}>
            <Menu
                setActive={setActive}
                className={cn(
                    "flex space-x-10 h-20",
                    navBg ? "bg-white/[0.2] dark:bg-black" : "bg-transparent"
                )}
            >
                <MenuItem
                    setActive={setActive}
                    active={active}
                    childClassName="text-md"
                    item="Logo"
                    itemNode={
                        <Image
                            src="https://dummyimage.com/500x500/000/fff&text=+LOGO+"
                            alt="Logo"
                            height={64}
                            width={64}
                        />
                    }
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Products"
                >
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://dummyimage.com/600x400/000/fff&text=Hey"
                            description="Prepare for tech interviews like never before."
                        />
                    </div>
                </MenuItem>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Pricing"
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
