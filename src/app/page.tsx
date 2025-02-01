import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import HeroSection from "../components/LandingPage/HeroSection";
import AboutMe from "@/components/LandingPage/AboutMe";
import Contact from "@/components/LandingPage/Contact";

export default function Home() {
  return (
    <MainLayoutWrapper>
      <div className="pb-10">
        <HeroSection />
        <AboutMe />
        <Contact />
      </div>
    </MainLayoutWrapper>
  );
}
