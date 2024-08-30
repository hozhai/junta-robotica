import AboutSection from "@/components/pages/AboutSection";
import HeroSection from "@/components/pages/HeroSection";
import TimelineSection from "@/components/pages/TimelineSection";

export default function Home() {
    return (
        <div className="snap-mandatory snap-y overflow-y-scroll h-screen">
            <HeroSection className="snap-center relative" />
            <AboutSection className="snap-start relative" />
            <TimelineSection className="snap-start relative" />
        </div>
    );
}
