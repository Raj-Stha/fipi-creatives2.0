import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Service from "@/components/home/service";
import GrowthStrategy from "@/components/home/growth-service";
import Testimonials from "@/components/home/testimonial";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <Stats />

        {/* <Service /> */}
      </div>

      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <GrowthStrategy />
        {/* <Testimonials /> */}

        <CTA />
      </div>
    </div>
  );
}
