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
import { Menu, Settings2, Shield, SquareUser, User } from "lucide-react";
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
            <DropdownMenuContent>
                {/* fixme: remove placeholder john doe */}
                {/* fixme: icons are on new line instead of inline w/ text */}
                <DropdownMenuLabel>
                    <User /> John Doe
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <SquareUser /> My Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings2 /> Preferences
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Shield /> My Team
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function Navbar() {
    return (
        <nav className="z-40 flex justify-center items-center fixed min-w-full text-xl bg-gray">
            <div className="flex justify-center items-center bg-neutral-950">
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
            <div className="self-center mr-10">
                <AvatarIcon />
            </div>
        </nav>
    );
}
