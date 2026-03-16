import { notFound } from "next/navigation";
import { works } from "@/data/works";
import RebrandFipiDetail from "@/components/works/details/RebrandFipiDetail";
import GenericWorkDetail from "@/components/works/details/GenericWorkDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return { title: "Work Not Found" };
  
  return {
    title: `${work.title} | FiPi Creatives Portfolio`,
    description: work.description,
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  
  if (!work) notFound();

  // Conditionally render a completely different UI/UX presentation based on the slug
  if (work.slug === "rebrand-fipi") {
    return <RebrandFipiDetail work={work} />;
  }

  // Fallback generic detail layout for all other works
  return <GenericWorkDetail work={work} />;
}
