import { HeroSection } from "@/components/sections/hero";
import { PartnersCarousel } from "@/components/sections/partners";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ComparisonSection } from "@/components/sections/comparison";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersCarousel />
      <HowItWorksSection />
      <ComparisonSection />
      <FooterSection />
    </main>
  );
}
