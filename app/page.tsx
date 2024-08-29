import Hero from "@/components/pages/HeroSection";
import DateTime from "@/components/pages/DateSection";

export default function Home() {
    return (
        <div className="snap-y">
            <Hero className="snap-center snap-mandatory" />
            <DateTime className="snap-start" />
        </div>
    );
}
