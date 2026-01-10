import { NavbarStaggered } from "@/components/navbar-staggered";
import {
  HeroSection,
  FeaturesSection,
  ModulesSection,
  TimelineSection,
  CTASection,
  Footer,
} from "@/components/home";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavbarStaggered />
      <HeroSection />
      <FeaturesSection />
      <ModulesSection />
      <TimelineSection />
      <CTASection />
      <Footer />
    </main>
  );
}
