import Accomplishment from "@/components/Accomplishment";
import HeroSection from "@/components/site/HeroSection";
import { pageBackdrop } from "@/components/site/PageBackdrop";
import MedicalAffairsSplit from "@/components/site/MedicalAffairsSplit";
import RFPConfigurator from "@/components/site/RFPConfigurator";
import ServicesBento from "@/components/site/ServicesBento";
import SmoFeatureSplit from "@/components/site/SmoFeatureSplit";
import TherapeuticAreas from "@/components/site/TherapeuticAreas";
import ValuePillars from "@/components/site/ValuePillars";
import VisionSection from "@/components/site/VisionSection";

export default function Home() {
  return (
    <main className="relative isolate" style={pageBackdrop()}>
      <HeroSection />
      <ValuePillars />
      <ServicesBento />
      <SmoFeatureSplit />
      <Accomplishment />
      <TherapeuticAreas />
      <MedicalAffairsSplit />
      <VisionSection />
      <RFPConfigurator id="rfp" />
    </main>
  );
}
