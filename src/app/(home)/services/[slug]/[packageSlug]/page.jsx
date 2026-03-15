import { notFound } from "next/navigation";
import { getServiceBySlug, getPackageBySlug } from "@/data/services";
import PackageDetailPage from "@/components/services/PackageDetailPage";

export async function generateMetadata({ params }) {
  const { slug, packageSlug } = await params;
  const service = getServiceBySlug(slug);
  const pkg = getPackageBySlug(slug, packageSlug);
  if (!service || !pkg) return { title: "Package Not Found" };
  return {
    title: `${pkg.title} – ${service.title} | FiPi Creatives`,
    description: pkg.description,
  };
}

export default async function PackagePage({ params }) {
  const { slug, packageSlug } = await params;
  const service = getServiceBySlug(slug);
  const pkg = getPackageBySlug(slug, packageSlug);
  if (!service || !pkg) notFound();

  return <PackageDetailPage service={service} pkg={pkg} />;
}
