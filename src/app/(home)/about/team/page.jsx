import { teamMembers, departments } from "@/data/about";
import OurTeamPage from "@/components/about/OurTeamPage";

export const metadata = {
  title: "Our Team | FiPi Creatives",
  description:
    "Meet the designers, strategists, developers, and storytellers who make up the FiPi Creatives team.",
};

export default function OurTeamRoute() {
  return <OurTeamPage teamMembers={teamMembers} departments={departments} />;
}
