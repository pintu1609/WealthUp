import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import BackedBy from "@/components/BackedBy";
import WealthOptions from "@/components/WealthOption";
import WhyWealth from "@/components/WhyWealth";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="h-[1px] bg-[#F8FAFC]"/>
      <Hero />
      <BackedBy />
      <WealthOptions />
      <WhyWealth />
      <CTA />
      <HowItWorks />
    </main>
  );
}