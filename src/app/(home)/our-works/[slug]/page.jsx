import { notFound } from "next/navigation";
import { works } from "@/data/works";
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

  // Unified detail layout for all works
  return <GenericWorkDetail work={work} />;
}
