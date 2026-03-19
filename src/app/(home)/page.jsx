import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Service from "@/components/home/service";
import GrowthStrategy from "@/components/home/growth-service";
import Testimonials from "@/components/home/testimonial";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import CTA from "@/components/home/cta";
import TestimonialCarousel from "../../components/home/testimonial-carrousel";
import { getAllBlogs } from "@/data/blogs";

export default function Home() {
  const latestBlogs = getAllBlogs().slice(0, 3);

  return (
    <div>
      <Hero />
      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <Stats />
        <GrowthStrategy />
      </div>

      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        {/* <Service /> */}
        <TestimonialCarousel />
        {/* <Testimonials /> */}

        <HomeBlogSection blogs={latestBlogs} />
        <CTA />
      </div>
    </div>
  );
}
