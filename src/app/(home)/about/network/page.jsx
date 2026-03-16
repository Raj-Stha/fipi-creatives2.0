import { partnerCategories, networkStats, globalPresence } from "@/data/about";
import OurNetworkPage from "@/components/about/OurNetworkPage";

export const metadata = {
  title: "Our Network | FiPi Creatives",
  description:
    "Explore FiPi Creatives' global network of technology partners, media alliances, agency partners, and 2,000+ influencers across South Asia.",
};

export default function OurNetworkRoute() {
  return (
    <OurNetworkPage
      partnerCategories={partnerCategories}
      networkStats={networkStats}
      globalPresence={globalPresence}
    />
  );
}
