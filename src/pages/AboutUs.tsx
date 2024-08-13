import ContactInfo from "@/components/ContactInfo";
import MissionAndVision from "@/components/MissionAndVision";
import OurLocation from "@/components/OurLocation";
import OurStory from "@/components/OurStory";
import OurTeam from "@/components/OurTeam";

const AboutUs = () => {
  return (
    <>
      <OurStory />
      <MissionAndVision />
      <ContactInfo />
      <OurTeam />
      <OurLocation />
    </>
  );
};

export default AboutUs;
