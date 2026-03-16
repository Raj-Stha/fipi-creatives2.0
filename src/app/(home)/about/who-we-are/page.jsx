import { companyStory, values } from "@/data/about";
import WhoWeArePage from "@/components/about/WhoWeArePage";

export const metadata = {
  title: "Who We Are | FiPi Creatives",
  description:
    "Discover the story, mission, and values behind FiPi Creatives — a full-service creative agency built in Kathmandu for ambitious brands.",
};

export default function WhoWeAreRoute() {
  return <WhoWeArePage data={{ companyStory, values }} />;
}
