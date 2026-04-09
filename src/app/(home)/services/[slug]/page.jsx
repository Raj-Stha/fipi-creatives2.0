import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import PackageTabs from "@/components/services/PackageTabs";
import CustomProjectSection from "@/components/services/CustomProjectSection";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} Services | FiPi Creatives`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const hasPackages = service.packages && service.packages.length > 0;

  return (
    <>
      <ServiceHero service={service} />
      {hasPackages ? (
        <PackageTabs service={service} />
      ) : (
        <CustomProjectSection service={service} />
      )}
    </>
  );
}
