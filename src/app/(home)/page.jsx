import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Service from "@/components/home/service";
import GrowthStrategy from "../../components/home/growth-service";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <Stats />

        <Service />
      </div>

      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <GrowthStrategy />
      </div>
    </div>
  );
}
