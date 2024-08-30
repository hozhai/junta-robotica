import Hero from "@/components/pages/HeroSection";
import DateTime from "@/components/pages/DateSection";

export default function Home() {
    return (
        <div className="snap-mandatory snap-y overflow-y-scroll h-screen">
            <Hero className="snap-center relative" />
            <DateTime className="snap-start relative" />
        </div>
    );
}
