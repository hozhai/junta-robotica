// nextjs
import Image from "next/image";

// ui
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "./ui/tooltip";

// icons
import { LogOut, Menu, Settings2, Shield, SquareUser } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

function AvatarIcon() {
    return (
        <DropdownMenu>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger
                        asChild
                        className="border-none outline-none hover:drop-shadow-xl"
                    >
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage
                                    src="https://avatars.githubusercontent.com/u/57015971?v=4"
                                    width={80}
                                    height={80}
                                />
                                <AvatarFallback>HZ</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    {/* fixme: remove placeholder big johnny doedoe */}
                    <TooltipContent>John Doe</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent align="end">
                {/* fixme: remove placeholder john doe */}
                {/* fixme: icons are on new line instead of inline w/ text */}
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                    <SquareUser className="w-4" /> &nbsp; My Account
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <Settings2 className="w-4" /> &nbsp; Preferences
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <Shield className="w-4" /> &nbsp; My Team
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 cursor-pointer">
                    <LogOut className="w-4" /> &nbsp; Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function Navbar() {
    return (
        <nav className="z-40 flex justify-center items-center fixed min-w-full text-xl">
            <div className="flex justify-center items-center ">
                <div className="md:mx-14">
                    <Image
                        src="https://dummyimage.com/500x500/000/fff&text=+LOGO+"
                        width={80}
                        height={80}
                        alt="Logo Placeholder Image"
                    />
                </div>
                <div className="block md:hidden ml-5">
                    <Menu />
                </div>
                <div className="hidden md:block">
                    <ul className="flex justify-center items-center list-none">
                        <li>Home</li>
                    </ul>
                </div>
            </div>
            <div className="ml-auto mr-10">
                <ThemeToggler />
            </div>
            <div className="self-center mr-16">
                <AvatarIcon />
            </div>
        </nav>
    );
}
