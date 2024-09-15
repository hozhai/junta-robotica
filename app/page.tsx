import { Navbar } from "@/components/custom/Navbar";
import AboutSection from "@/components/pages/AboutSection";
import HeroSection from "@/components/pages/HeroSection";
import TimelineSection from "@/components/pages/TimelineSection";

import { auth } from "@/auth";
import AvatarIcon from "@/components/custom/Avatar";

export default async function Home() {
    const session = await auth()
    return (
        <div
            className=
            "snap-y snap-proximity motion-safe:scroll-smooth overflow-x-hidden min-h-screen max-h-screen min-w-full max-w-full"
        >
            <Navbar avatarImage={<AvatarIcon />} userName={session?.user?.name} />
            <HeroSection className="snap-center relative" />
            <AboutSection className="snap-center relative" />
            <TimelineSection className="snap-start relative" />
        </div>
    );
}
