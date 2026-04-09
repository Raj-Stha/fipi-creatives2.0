import { Suspense } from "react";
import { works, workCategories } from "@/data/works";
import WorksTabs from "@/components/works/WorksTabs";

export const metadata = {
  title: "Our Works | FiPi Creatives",
  description: "Explore our diverse portfolio of digital experiences, brand identities, and high-conversion marketing campaigns.",
};

export default function OurWorksPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-gray-400">
          Loading amazing works...
        </div>
      }>
        <WorksTabs 
          works={works} 
          categories={workCategories} 
        />
      </Suspense>
    </main>
  );
}
