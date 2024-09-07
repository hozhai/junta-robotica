import { Navbar } from "@/components/custom/Navbar";
import AboutSection from "@/components/pages/AboutSection";
import HeroSection from "@/components/pages/HeroSection";
import TimelineSection from "@/components/pages/TimelineSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection className="snap-center relative" />
            <AboutSection className="snap-center relative" />
            <TimelineSection className="snap-start relative" />
        </>
    );
}
