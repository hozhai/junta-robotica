import AboutSection from "@/components/pages/AboutSection";
import HeroSection from "@/components/pages/HeroSection";
import TimelineSection from "@/components/pages/TimelineSection";

export default function Home() {
    return (
        <>
            <HeroSection className="snap-center relative" />

            <AboutSection className="snap-center relative" />
            <TimelineSection className="snap-start relative" />
        </>
    );
}
