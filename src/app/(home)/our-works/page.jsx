import { works, workCategories } from "@/data/works";
import WorksHero from "@/components/works/WorksHero";
import WorksTabs from "@/components/works/WorksTabs";

export const metadata = {
  title: "Our Work | FiPi Creatives",
  description: "Explore our portfolio of creative works, including branding, digital marketing, web & app development, and photography."
};

export default function OurWorksPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <WorksHero />
      <WorksTabs works={works} categories={workCategories} />
    </div>
  );
}
