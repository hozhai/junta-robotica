import Image from "next/image";
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

export default function Navbar() {
    return (
        <nav className="flex justify-center items-center fixed min-w-full max-w-full px-14 text-xl">
            <div className="ml-auto hidden md:block">
                <ul className="flex justify-center items-center list-none">
                    <li>Home</li>
                </ul>
            </div>
            <div className="flex justify-center items-center self-start md:mx-14">
                <Image
                    src="https://dummyimage.com/500x500/000/fff&text=+LOGO+"
                    width={80}
                    height={80}
                    alt="Logo Placeholder Image"
                />
            </div>
            <div className="hidden md:block">
                <ul className="flex justify-center items-center list-none">
                    <li>Home</li>
                </ul>
            </div>
            <div className="self-center ml-auto">
                <DropdownMenu>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                            </TooltipTrigger>
                            <TooltipContent>John Doe</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <DropdownMenuContent className="mr-10">
                        {/* fixme: remove placeholder john doe */}
                        <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>My Account</DropdownMenuItem>
                        <DropdownMenuItem>Preferences </DropdownMenuItem>
                        <DropdownMenuItem>My Team</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                            Sign Out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
